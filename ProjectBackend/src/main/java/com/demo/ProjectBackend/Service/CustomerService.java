package com.demo.ProjectBackend.Service;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;

public interface CustomerService {
	
	Customer convertFromDto(CustomerDto cdto);
	
	CustomerDto convertToDto(Customer cust);

	void add(Customer customer);

	void addLogin(CustomerDto cDto, Customer customer);

}
