package com.demo.ProjectBackend.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class CustomerLogin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int loginid;
	
	private String email;
	
	private String password;
	
	@OneToOne
	private Customer customer;

	public CustomerLogin() {
		super();
	}

	public CustomerLogin(String email, String password, Customer customer) {
		super();
		this.email = email;
		this.password = password;
		this.customer = customer;
	}

	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	

}
