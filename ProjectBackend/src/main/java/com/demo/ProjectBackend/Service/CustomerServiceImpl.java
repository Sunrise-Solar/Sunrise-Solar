package com.demo.ProjectBackend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.demo.ProjectBackend.Dao.CustomerRepository;
import com.demo.ProjectBackend.Dao.RequestRepository;
import com.demo.ProjectBackend.Dao.UserRepository;
import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;

import com.demo.ProjectBackend.beans.Request;
import com.demo.ProjectBackend.beans.User;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	@Autowired
	private RequestRepository rrepo;
	@Autowired
	private UserRepository urepo;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public Customer convertFromDto(CustomerDto cdto) {
		Customer customer = new Customer(cdto.getfName(),cdto.getlName(), cdto.getMobile(),cdto.getEmail(),cdto.getCity(),cdto.getPincode());
		return customer;
	}


	@Override
	public CustomerDto convertToDto(Customer cust) {
		CustomerDto cdto = new CustomerDto(cust.getFName(),cust.getLName(),cust.getMobile(),cust.getEmail(),cust.getCity(),cust.getPincode());
		return cdto;
	}


	@Override
	public void add(Customer customer) {
		
		crepo.save(customer);
	}


	@Override
	public void add(Request req) {
	
		rrepo.save(req);
	}


	@Override
	public Optional<Customer> getCust(int loginid) {
		
		return crepo.findById(loginid);
	}


	@Override
	public void deleteRequest(int id) {
		rrepo.deleteById(id);
	}


	@Override
	public Optional<Request> getRequest(int id) {
		Optional<Request> req = rrepo.findById(id);
		return req;
	}


	@Override
	public void addUser(CustomerDto cdto, Customer customer) {
		User user = new User(cdto.getEmail(),passwordEncoder.encode(cdto.getPassword()),"customer",customer);
		urepo.save(user);
	}


	
	
	
	
	
	

	
	

}
