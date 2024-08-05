package com.demo.ProjectBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Service.CustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService cservice;


}
