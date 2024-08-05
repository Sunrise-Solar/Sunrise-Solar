package com.demo.ProjectBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.ProjectBackend.Dao.VendorLoginRepository;
import com.demo.ProjectBackend.Dao.VendorRepository;

public class VendorServiceImpl implements VendorService{
	
	@Autowired
	private VendorRepository vrepo;
	@Autowired
	private VendorLoginRepository vlrepo;
	

}
