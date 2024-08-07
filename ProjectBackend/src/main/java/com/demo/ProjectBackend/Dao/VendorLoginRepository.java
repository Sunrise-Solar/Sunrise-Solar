package com.demo.ProjectBackend.Dao;

import org.springframework.data.repository.CrudRepository;

import com.demo.ProjectBackend.beans.VendorLogin;

public interface VendorLoginRepository extends CrudRepository<VendorLogin,Integer>{

	VendorLogin findByEmail(String email);

}
