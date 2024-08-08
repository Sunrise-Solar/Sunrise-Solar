package com.demo.ProjectBackend.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.Service.CustomerService;
import com.demo.ProjectBackend.Service.VendorService;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;
import com.demo.ProjectBackend.beans.Vendor;
import com.demo.ProjectBackend.beans.VendorLogin;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
public class HomeController {
	

	@Autowired
	private CustomerService cservice;
	
	@Autowired
	private VendorService vservice;
	
	@GetMapping("/register")
	public String register() {
		return "chooseregister";
	}
	
	@GetMapping("/cregister")
	public String cregister() {
		return "cregisterform";
	}
	
	@GetMapping("vregister")
	public String vregister() {
		return "vregisterform";
	}
	
	@GetMapping("/login")
	public String login() {
		return "chooselogin";
	}
	
	@GetMapping("clogin")
	public String clogin() {
		return "cloginform";
	}
	
	@GetMapping("vlogin")
	public String vlogin() {
		return "vloginform";
	}
	
	@GetMapping("about")
	public String about() {
		return "about";
	}
	
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
			Optional<Customer> customer1 = cservice.getCust(clogin.getCustomer().getCId());
			if(customer1.isPresent()) {
				Customer customer = customer1.get();
				session.setAttribute("user", customer);
				System.out.println(customer);
			}
			
			System.out.println("login successfull");
			return "customer/cdashboard";
		}else {
			System.out.println("invalid entry");
			return null;
		}
	}
	
	@PostMapping("/vsubmit")
	public String submitvregister(@Valid@RequestBody VendorDto vdto, BindingResult result) {
		if(result.hasErrors()) {
			return "vregister";
		}
		Vendor vendor = vservice.convertFromDto(vdto);
		vservice.add(vendor);
		vservice.addLogin(vdto, vendor);
		return "home";
	}
	
	@PostMapping("/vlsubmit")
	public String submitclogin(@RequestBody VendorDto vdto, HttpSession session) {
		VendorLogin vlogin = vservice.authenticate(vdto);
		if(vlogin!=null) {
			Optional<Vendor> vendor1= vservice.getVendor(vlogin.getVendor().getVId());
			Vendor vendor = vendor1.get();
			System.out.println("login successfull");
			session.setAttribute("user", vendor);
			return "vendor/vdashboard";
		}else {
			return null;
		}
	}

}
