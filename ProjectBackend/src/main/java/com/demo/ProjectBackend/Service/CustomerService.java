package com.demo.ProjectBackend.Service;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;

public interface CustomerService {
	
	Customer convertFromDto(CustomerDto cdto);
	
	CustomerDto convertToDto(Customer cust);

	void add(Customer customer);

	void addLogin(CustomerDto cDto, Customer customer);

	CustomerLogin authenticate(CustomerDto cdto);

}
