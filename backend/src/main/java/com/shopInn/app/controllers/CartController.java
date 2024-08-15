package com.shopInn.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.Cart;
import com.shopInn.app.model.User;
import com.shopInn.app.request.AddItemRequest;
import com.shopInn.app.response.ApiResponse;
import com.shopInn.app.service.CartService;
import com.shopInn.app.service.UserService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	private CartService cartService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public ResponseEntity<Cart>findUserCart(@RequestHeader("Authorization")String jwt) throws UserException
	{
		User user=userService.findUserProfileByJwt(jwt);
		Cart cart=cartService.findUserCart(user.getId());
		
		return new ResponseEntity<Cart>(cart,HttpStatus.OK);
	}
	
	@PutMapping("/add")
	public ResponseEntity<ApiResponse>addItemToCart(@RequestBody AddItemRequest req,@RequestHeader("Authorization")String jwt)throws UserException,ProductException
	{
		User user=userService.findUserProfileByJwt(jwt);
		cartService.addCartItem(user.getId(), req);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("itemadded to cart");
		res.setStatus(true);
		
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	
}
