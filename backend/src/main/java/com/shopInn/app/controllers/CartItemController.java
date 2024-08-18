package com.shopInn.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.shopInn.app.exception.CartItemException;
import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.CartItem;
import com.shopInn.app.model.User;
import com.shopInn.app.response.ApiResponse;
import com.shopInn.app.service.CartItemService;
import com.shopInn.app.service.UserService;

public class CartItemController {

	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private UserService userService;
	
	
	
	
	@DeleteMapping("/{cartItemId}")
	public ResponseEntity<ApiResponse>deleteCartItem(@PathVariable Long cartItemId,@RequestHeader("Authorization")String jwt) throws UserException,CartItemException{
		User user=userService.findUserProfileByJwt(jwt);
		cartItemService.removeCartItem(user.getId(), cartItemId);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("item Deleted");
		res.setStatus(true);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	@PutMapping("/{cartItemId}")
	public ResponseEntity<CartItem>updateCartItem( @RequestBody CartItem cartItem, @PathVariable Long cartItemId,@RequestHeader("Authorization")String jwt) throws UserException,CartItemException{
		User user=userService.findUserProfileByJwt(jwt);
		
		CartItem updatedCartItem=cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);
		return new ResponseEntity<>(updatedCartItem,HttpStatus.OK);
	}
	
	
}
