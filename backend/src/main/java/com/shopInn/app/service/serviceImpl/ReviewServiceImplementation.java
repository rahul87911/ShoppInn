package com.shopInn.app.service.serviceImpl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.model.Product;
import com.shopInn.app.model.Review;
import com.shopInn.app.model.User;
import com.shopInn.app.repo.ReviewRepository;
import com.shopInn.app.request.ReviewRequest;
import com.shopInn.app.service.ProductService;
import com.shopInn.app.service.ReviewService;



@Service
public class ReviewServiceImplementation implements ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private ProductService productService;
	
	
	
	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product=productService.findProductById(req.getProductId());
		
		Review review= new Review();
		
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		
		return reviewRepository.save(review);
	}

	
	
	@Override
	public List<Review> getAllReview(Long productId) {
		return reviewRepository.getAllProductsReview(productId);
	}

}
