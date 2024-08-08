package com.demo.ProjectBackend.Service;

import java.util.Optional;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.Request;

import jakarta.validation.Valid;

public interface CustomerService {
	
	Customer convertFromDto(CustomerDto cdto);
	
	CustomerDto convertToDto(Customer cust);

	void add(Customer customer);


	void add(Request req);

	Optional<Customer> getCust(int loginid);

	void deleteRequest(int id);

	Optional<Request> getRequest(int id);

	void addUser(CustomerDto cdto, Customer customer);

	

}
