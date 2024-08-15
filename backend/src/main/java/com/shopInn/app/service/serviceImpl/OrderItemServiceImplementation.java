package com.shopInn.app.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopInn.app.model.OrderItem;
import com.shopInn.app.repo.OrderItemRepository;
import com.shopInn.app.service.OrderItemService;



@Service
public class OrderItemServiceImplementation implements OrderItemService {

	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		
		return orderItemRepository.save(orderItem) ;
	}

}
