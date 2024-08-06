package com.demo.ProjectBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Service.CustomerService;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService cservice;
	
	@PostMapping("/csubmit")
	public String submitcregister(@RequestBody CustomerDto cDto) {
		Customer customer = cservice.convertFromDto(cDto);
		cservice.add(customer);
		cservice.addLogin(cDto, customer);
		return "home";
	}
	
	@PostMapping("/clsubmit")
	public String submitclogin(@RequestBody CustomerDto cdto) {
		CustomerLogin clogin = cservice.authenticate(cdto);
		if(clogin!=null) {
			System.out.println("login successfull");
			return "cdashboard";
		}else {
			System.out.println("invalid entry");
			return null;
		}
	}


}
