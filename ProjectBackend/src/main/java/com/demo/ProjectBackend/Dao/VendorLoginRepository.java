package com.demo.ProjectBackend.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.demo.ProjectBackend.beans.VendorLogin;

public interface VendorLoginRepository extends CrudRepository<VendorLogin,Integer>{

	VendorLogin findByEmail(String email);
	@Query("select u from VendorLogin u where u.email=:email")
	Optional<VendorLogin> findByUsername(@Param("email")String email);

}
