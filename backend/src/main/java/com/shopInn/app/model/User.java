package com.shopInn.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String firstName;
	
	private String lastName;
	
	private String password;
	
	private String email;
	
	private String role;
	
	private String mobile;
	
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Address> address=new ArrayList<>();
	
	@Embedded
	@ElementCollection
	@CollectionTable(name="payment_information",joinColumns = @JoinColumn(name="user_id"))
	private List<PaymentInformation> paymentInforamtion=new ArrayList<>();
	
	@OneToMany(mappedBy="user",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Rating>ratings=new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	private List<Review> reviews=new ArrayList<>();
	
	private LocalDateTime createdAt;

	public User() {}
	
	
	
}
