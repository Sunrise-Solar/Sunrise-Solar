package com.demo.ProjectBackend.Controllers;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Service.CustomerService;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.Request;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired
	private CustomerService cservice;

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

	@DeleteMapping("/deleterequest/{id}")
	public ResponseEntity<String> deleteRequest(@PathVariable("id") int id, HttpSession session) {
		 logger.info("Delete request received with ID: {}", id);
		Customer customer = (Customer) session.getAttribute("user");
		System.out.println(customer);
		if (customer != null) {
			Optional<Request> request = cservice.getRequest(id); 
			if (request.isPresent()) {
				cservice.deleteRequest(id);
				return ResponseEntity.ok("Request deleted successfully");
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Request not found");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
	}
	
	@GetMapping("/test")
	public ResponseEntity<String> testEndpoint() {
	    return ResponseEntity.ok("Test endpoint is working");
	}


	@GetMapping("/clogout")
	public String clogout(HttpSession session) {
		session.invalidate();
		return "home";
	}

}
