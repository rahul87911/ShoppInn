package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopInn.app.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
