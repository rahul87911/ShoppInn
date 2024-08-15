package com.shopInn.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopInn.app.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
