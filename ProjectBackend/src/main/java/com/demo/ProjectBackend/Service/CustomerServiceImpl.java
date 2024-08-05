package com.demo.ProjectBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.ProjectBackend.Dao.CustomerLoginRepository;
import com.demo.ProjectBackend.Dao.CustomerRepository;
import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	@Autowired
	private CustomerLoginRepository clrepo;
	
	
	@Override
	public Customer convertFromDto(CustomerDto cdto) {
		Customer customer = new Customer(cdto.getfName(),cdto.getlName(), cdto.getMobile(),cdto.getEmail(),cdto.getCity(),cdto.getPincode());
		return customer;
	}


	@Override
	public CustomerDto convertToDto(Customer cust) {
		CustomerDto cdto = new CustomerDto(cust.getfName(),cust.getlName(),cust.getMobile(),cust.getEmail(),cust.getCity(),cust.getPincode());
		return null;
	}


	@Override
	public void add(Customer customer) {
		
		crepo.save(customer);
	}


	@Override
	public void addLogin(CustomerDto cDto, Customer customer) {
		CustomerLogin clogin = new CustomerLogin(cDto.getEmail(),cDto.getPassword(), customer);
		clrepo.save(clogin);
		
	}
	
	
	
	
	
	

	
	

}
