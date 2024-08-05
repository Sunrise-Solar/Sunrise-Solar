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

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService cservice;
	
	@PostMapping("/csubmit")
	public void submitcregister(@RequestBody CustomerDto cDto,Model model) {
		System.out.println(cDto.getfName()+cDto.getlName());
		Customer customer = cservice.convertFromDto(cDto);
		cservice.add(customer);
		cservice.addLogin(cDto, customer);
	}


}
