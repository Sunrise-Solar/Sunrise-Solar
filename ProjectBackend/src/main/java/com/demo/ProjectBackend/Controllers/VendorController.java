package com.demo.ProjectBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Service.VendorService;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vservice;
	

}
