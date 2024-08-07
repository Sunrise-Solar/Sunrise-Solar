package com.demo.ProjectBackend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.ProjectBackend.Dao.CustomerLoginRepository;
import com.demo.ProjectBackend.Dao.CustomerRepository;
import com.demo.ProjectBackend.Dao.RequestRepository;
import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.CustomerLogin;
import com.demo.ProjectBackend.beans.Request;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	@Autowired
	private CustomerLoginRepository clrepo;
	@Autowired
	private RequestRepository rrepo;
	
	@Override
	public Customer convertFromDto(CustomerDto cdto) {
		Customer customer = new Customer(cdto.getfName(),cdto.getlName(), cdto.getMobile(),cdto.getEmail(),cdto.getCity(),cdto.getPincode());
		return customer;
	}


	@Override
	public CustomerDto convertToDto(Customer cust) {
		CustomerDto cdto = new CustomerDto(cust.getfName(),cust.getlName(),cust.getMobile(),cust.getEmail(),cust.getCity(),cust.getPincode());
		return cdto;
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


	@Override
	public CustomerLogin authenticate(CustomerDto cdto) {
		CustomerLogin clogin = clrepo.findByEmail(cdto.getEmail());
		if(clogin!=null && cdto.getPassword().equals(clogin.getPassword())) {
			return clogin;
		}else { 
			return null;
		}
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


	
	
	
	
	
	

	
	

}
