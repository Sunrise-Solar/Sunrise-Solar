package com.demo.ProjectBackend.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Vendor {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int vId;
	
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
	private String company;
	
	@NotBlank(message="Required field!")
	private String address;

	public Vendor() {
		super();
	}
	
	public Vendor(String fName, String lName, String mobile, String email, String company, String address) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.company = company;
		this.address = address;
	}

	public Vendor(int vId, String fName, String lName, String mobile, String email, String company, String address) {
		super();
		this.vId = vId;
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.company = company;
		this.address = address;
	}

	public int getvId() {
		return vId;
	}

	public void setvId(int vId) {
		this.vId = vId;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Vendor [vId=" + vId + ", fName=" + fName + ", lName=" + lName + ", mobile=" + mobile + ", company="
				+ company + ", address=" + address + "]";
	}
	
	
	

}
