package com.shopInn.app.service.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopInn.app.exception.CartItemException;
import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.Cart;
import com.shopInn.app.model.CartItem;
import com.shopInn.app.model.Product;
import com.shopInn.app.model.User;
import com.shopInn.app.repo.CartItemRepository;
import com.shopInn.app.service.CartItemService;
import com.shopInn.app.service.UserService;






@Service
public class CartItemServiceImplementation implements CartItemService {

	@Autowired
	private CartItemRepository cartItemRepository;
	
	@Autowired
	private UserService userService;
	
	
	
	@Override
	public CartItem createCartItem(CartItem cartItem) {
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());
		
		CartItem createdCartItem=cartItemRepository.save(cartItem);
		
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		
		CartItem item=findCartItemById(id);
		User user=userService.findUserById(item.getUserId());
		
		if(user.getId().equals(userId))
		{
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity()*item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
		}
		return cartItemRepository.save(item);
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		CartItem cartItem=cartItemRepository.findCartItem(cart, product, size, userId);
		
		
		return cartItem;
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		CartItem cartItem=findCartItemById(cartItemId);
		
		User user=userService.findUserById(cartItem.getUserId());
		
		User reqUser=userService.findUserById(userId);
		
		if(user.getId().equals(reqUser.getId()))
		{
			cartItemRepository.deleteById(cartItemId);
		}
		else
		throw new UserException("you can't remove another user's item"); 

	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		Optional<CartItem>opt=cartItemRepository.findById(cartItemId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new CartItemException("cartItem not found with id"+cartItemId);
		
	}

}
