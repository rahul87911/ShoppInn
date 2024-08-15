package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.shopInn.app.model.Rating;
import java.util.*;


public interface RatingRepository extends JpaRepository<Rating, Long> {

	@Query("SELECT r From Rating r Where r.product.id=:productId")
	public List<Rating> getAllProductsRating(@Param("productId")Long productId);
}
