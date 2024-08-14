package com.shopInn.app.service.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.User;
import com.shopInn.app.repo.UserRepository;
import com.shopInn.app.service.UserService;
import com.shopInn.appconfig.JwtProvider;


@Service
public class UserServiceImplementation implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	
	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User> user=userRepository.findById(userId);
		
		if(user.isPresent())
		{
			return user.get();
		}
		throw new UserException("User not found with id"+userId);
	}

	
	
	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		
		String email=jwtProvider.getEmailFromToken(jwt);
		
		User user=userRepository.findByEmail(email);
		
		if(user==null)
		{
			throw new UserException("User not found with email-"+email);
		}
		
		return user;
	}

}
