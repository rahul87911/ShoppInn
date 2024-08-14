package com.shopInn.app.service;

import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
}
