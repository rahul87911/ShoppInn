package com.shopInn.app.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopInn.app.exception.UserException;
import com.shopInn.app.model.User;
import com.shopInn.app.repo.UserRepository;
import com.shopInn.app.response.AuthResponse;
import com.shopInn.appconfig.JwtProvider;

@RestController
@RequestMapping("/auth")
public class AuthController {

	private UserRepository userRepository;
	
	private JwtProvider jwtProvider;
	
	private PasswordEncoder passwordEncoder;
	
	public AuthController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}



	public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException{
		
		String email=user.getEmail();
		String password=user.getPassword();
		String firstName=user.getFirstName();
		String lastName=user.getLastName();
		
		User isEmailExist=userRepository.findByEmail(email);
		
		if(isEmailExist!=null)
		{
			throw new UserException("Email already exists with another account !!" );
		}
		
		User createdUser= new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		
		User savedUser= userRepository.save(createdUser);
		
		Authentication authentication= new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token=jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse= new AuthResponse(token, "Signup Success");
		
		return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
	}
}
