package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.*;

import com.shopInn.app.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

	@Query("Select r from Review r where r.product.id=:productId")
	public List<Review>getAllProductsReview(@Param("productId")Long productId);
}
