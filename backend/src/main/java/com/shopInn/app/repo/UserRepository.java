package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopInn.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findByEmail(String email);
}
