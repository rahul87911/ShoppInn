package com.shopInn.app.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.model.Cart;
import com.shopInn.app.model.CartItem;
import com.shopInn.app.model.Product;
import com.shopInn.app.model.User;
import com.shopInn.app.repo.CartRepository;
import com.shopInn.app.request.AddItemRequest;
import com.shopInn.app.service.CartItemService;
import com.shopInn.app.service.CartService;
import com.shopInn.app.service.ProductService;



@Service
public class CartServiceImplementation implements CartService {

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private ProductService productService;
	
	
	
	@Override
	public Cart createCart(User user) {
		
		Cart cart=new Cart();
		cart.setUser(user);
		return cartRepository.save(cart);
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
	    // Fetch the cart associated with the user
	    Cart cart = cartRepository.findByUserId(userId);
	    
	    // Handle the case where cart is null
	    if (cart == null) {
	        // Handle this case as per your application's logic
	        // For example, you might log this as an error or throw an exception
	        throw new IllegalStateException("Cart should exist for user with ID: " + userId);
	    }
	    
	    // Find the product by its ID
	    Product product = productService.findProductById(req.getProductId());

	    // Check if the item already exists in the cart
	    CartItem isPresent = cartItemService.isCartItemExist(cart, product, req.getSize(), userId);
	    
	    if (isPresent == null) {
	        // Create a new cart item if it doesn't already exist
	        CartItem cartItem = new CartItem();
	        cartItem.setProduct(product);
	        cartItem.setCart(cart);
	        cartItem.setQuantity(req.getQuantity());
	        cartItem.setUserId(userId);
	        
	        // Calculate the price based on the quantity and product's discounted price
	        int price = req.getQuantity() * product.getDiscountedPrice();
	        cartItem.setPrice(price);
	        cartItem.setSize(req.getSize());
	        
	        // Save the new cart item to the database
	        CartItem createdCartItem = cartItemService.createCartItem(cartItem);
	        
	        // Add the newly created cart item to the cart
	        cart.getCartItems().add(createdCartItem);
	        cartRepository.save(cart); // Save the cart after adding the item
	    }

	    return "item added to cart";
	}


	@Override
	public Cart findUserCart(Long userId) {
		Cart cart=cartRepository.findByUserId(userId);
		
		int totalPrice=0;
		int totalDiscountedPrice=0;
		int totalItem=0;
		
		for(CartItem cartItem:cart.getCartItems()) {
			totalPrice=totalPrice+cartItem.getPrice();
			totalDiscountedPrice=totalDiscountedPrice+cartItem.getDiscountedPrice();
			totalItem=totalItem+cartItem.getQuantity();
		}
		
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setTotalItem(totalItem);
		cart.setTotalPrice(totalPrice);
		cart.setDiscount(totalPrice-totalDiscountedPrice);
		
		return cartRepository.save(cart);
	}

}
