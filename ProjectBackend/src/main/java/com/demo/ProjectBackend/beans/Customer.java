package com.demo.ProjectBackend.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

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
	private int CId;
	@JsonProperty("firstName")
	private String fName;
	@JsonProperty("lastName")
	private String lName;
	private String mobile;
	@Column(unique=true)
	private String email;
	private String city;
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
