package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopInn.app.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

}
