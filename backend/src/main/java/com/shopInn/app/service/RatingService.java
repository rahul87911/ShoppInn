package com.shopInn.app.service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.model.Rating;
import com.shopInn.app.model.User;
import com.shopInn.app.request.RatingRequest;
import java.util.*;

public interface RatingService {

	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);
}
