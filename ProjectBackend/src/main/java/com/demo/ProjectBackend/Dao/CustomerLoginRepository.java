package com.demo.ProjectBackend.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.demo.ProjectBackend.beans.CustomerLogin;

public interface CustomerLoginRepository extends CrudRepository<CustomerLogin,Integer>{
	
	CustomerLogin findByEmail(String email);
	@Query("select u from CustomerLogin u where u.email=:email")
	Optional<CustomerLogin> findByUsername(@Param("email")String email);

}
