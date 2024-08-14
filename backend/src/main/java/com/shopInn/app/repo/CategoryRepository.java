package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopInn.app.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
