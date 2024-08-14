package com.shopInn.app.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.model.Cart;
import com.shopInn.app.model.User;
import com.shopInn.app.repo.CartRepository;
import com.shopInn.app.request.AddItemRequest;
import com.shopInn.app.service.CartItemService;
import com.shopInn.app.service.CartService;



@Service
public class CartServiceImplementation implements CartService {

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartItemService cartItemService;
	
	
	
	@Override
	public Cart createCart(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cart findUserCart(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
