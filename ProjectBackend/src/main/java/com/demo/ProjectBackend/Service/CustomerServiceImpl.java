package com.demo.ProjectBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.ProjectBackend.Dao.CustomerLoginRepository;
import com.demo.ProjectBackend.Dao.CustomerRepository;

public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	@Autowired
	private CustomerLoginRepository clrepo;
	
	

}
