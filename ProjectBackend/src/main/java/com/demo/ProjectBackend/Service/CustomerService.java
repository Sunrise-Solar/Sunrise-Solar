package com.demo.ProjectBackend.Service;

import java.util.Optional;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;
import com.demo.ProjectBackend.beans.Request;

public interface CustomerService {
	
	Customer convertFromDto(CustomerDto cdto);
	
	CustomerDto convertToDto(Customer cust);

	void add(Customer customer);

	void addLogin(CustomerDto cDto, Customer customer);

	CustomerLogin authenticate(CustomerDto cdto);

	void add(Request req);

	Optional<Customer> getCust(int loginid);

	void deleteRequest(int id);

	

}
