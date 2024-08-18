package com.shopInn.app.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.Review;
import com.shopInn.app.model.User;
import com.shopInn.app.request.ReviewRequest;
import com.shopInn.app.service.ReviewService;
import com.shopInn.app.service.UserService;


@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/create")
	public ResponseEntity<Review>createReview(@RequestBody ReviewRequest req,@RequestHeader("Authorization")String jwt) throws UserException,ProductException
	{
		User user=userService.findUserProfileByJwt(jwt);
		
		Review review=reviewService.createReview(req, user);
		
		return new ResponseEntity<>(review,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Review>>getProductsReview(@PathVariable Long productId) throws UserException,ProductException
	{
		List<Review>reviews=reviewService.getAllReview(productId);
		
		return new ResponseEntity<>(reviews,HttpStatus.ACCEPTED);
	}
}
