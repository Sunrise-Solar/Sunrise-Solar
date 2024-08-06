package com.demo.ProjectBackend.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Service.CustomerService;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;
import com.demo.ProjectBackend.beans.Request;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService cservice;
	
	@PostMapping("/csubmit")
	public String submitcregister(@Valid@RequestBody CustomerDto cDto, BindingResult result) {
		if(result.hasErrors()) {
			return "cregister";
		}
		Customer customer = cservice.convertFromDto(cDto);
		cservice.add(customer);
		cservice.addLogin(cDto, customer);
		return "home";
	}
	
	@PostMapping("/clsubmit")
	public String submitclogin(@RequestBody CustomerDto cdto, HttpSession session) {
		CustomerLogin clogin = cservice.authenticate(cdto);
		
		if(clogin!=null) {
			Optional<Customer> customer1 = cservice.getCust(clogin.getCustomer().getcId());
			if(customer1.isPresent()) {
				Customer customer = customer1.get();
				session.setAttribute("user", customer);
				System.out.println(customer);
			}
			
			System.out.println("login successfull");
			return "cdashboard";
		}else {
			System.out.println("invalid entry");
			return null;
		}
	}
	
	@GetMapping("/addrequest")
	public String requestForm() {
		return "request";
	}
	
	@PostMapping("/submitrequest")
	public String submitRequest(@RequestBody Request req, HttpSession session) {
		Customer customer = (Customer) session.getAttribute("user");
		System.out.println(customer);
		req.setCustomer(customer);
		cservice.add(req);
		return "cdashboard";
	}
	
	@GetMapping("/deleterequest/{id}")
	public String deleteRequest(@RequestParam("id") int id) {
		cservice.deleteRequest(id);
		return "cdashboard";
	}
	
	@GetMapping("/clogout")
	public String clogout(HttpSession session) {
		session.invalidate();
		return "home";
	}


}
