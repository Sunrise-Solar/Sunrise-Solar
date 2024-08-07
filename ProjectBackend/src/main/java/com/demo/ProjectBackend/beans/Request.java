package com.demo.ProjectBackend.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Request {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int rId;
	
	@OneToOne
	private Customer customer;
	
	private String propertyType;
	
	private String address;
	
	private float ebill;
	
	private float econsum;

	public Request() {
		super();
	}
	
	

	public Request(Customer customer, String propertyType, String address, float ebill, float econsum) {
		super();
		this.customer = customer;
		this.propertyType = propertyType;
		this.address = address;
		this.ebill = ebill;
		this.econsum = econsum;
	}



	public Request(int rId, Customer customer, String propertyType, String address, float ebill, float econsum) {
		super();
		this.rId = rId;
		this.customer = customer;
		this.propertyType = propertyType;
		this.address = address;
		this.ebill = ebill;
		this.econsum = econsum;
	}

	public int getrId() {
		return rId;
	}

	public void setrId(int rId) {
		this.rId = rId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public float getEbill() {
		return ebill;
	}

	public void setEbill(float ebill) {
		this.ebill = ebill;
	}

	public float getEconsum() {
		return econsum;
	}

	public void setEconsum(float econsum) {
		this.econsum = econsum;
	}
	
	

}
