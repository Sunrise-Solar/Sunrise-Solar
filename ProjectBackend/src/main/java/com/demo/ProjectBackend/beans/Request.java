package com.demo.ProjectBackend.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
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
	

	public Request(Customer customer, String propertyType, String address, float ebill, float econsum) {
		super();
		this.customer = customer;
		this.propertyType = propertyType;
		this.address = address;
		this.ebill = ebill;
		this.econsum = econsum;
	}
	

}
