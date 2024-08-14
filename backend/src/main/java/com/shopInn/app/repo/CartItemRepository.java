package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopInn.app.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
