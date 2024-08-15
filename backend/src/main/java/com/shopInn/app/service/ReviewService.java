package com.shopInn.app.service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.model.Review;
import com.shopInn.app.model.User;
import com.shopInn.app.request.ReviewRequest;
import java.util.*;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
}
