package com.shopInn.app.service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.Cart;
import com.shopInn.app.model.CartItem;
import com.shopInn.app.model.User;
import com.shopInn.app.request.AddItemRequest;

public interface CartService {

    public Cart createCart(User user);
	
    public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	public Cart findUserCart(Long userId);
}
