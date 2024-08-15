package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import com.shopInn.app.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o FROM Order o WHERE o.user.id = :userId AND o.orderStatus IN ('PLACED', 'CONFIRMED', 'SHIPPED', 'DELIVERED')")
    List<Order> getUsersOrders(@Param("userId") Long userId);
}
