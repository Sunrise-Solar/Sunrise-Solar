package com.demo.ProjectBackend.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cId;
	
	@NotBlank(message="Required field!")
	private String fName;
	
	@NotBlank(message="Required field!")
	private String lName;
	
	@NotBlank(message="Required field!")
	private String mobile;
	
	@NotBlank(message="Required field!")
	@Column(unique=true)
	@Email(message="Enter valid email id!")
	private String email;
	
	@NotBlank(message="Required field!")
	private String city;
	
	@NotBlank(message="Required field!")
	private String pincode;

	public Customer(String fName, String lName, String mobile, String email, String city, String pincode) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.city = city;
		this.pincode = pincode;
	}


	
	
	
	

}
