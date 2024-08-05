package com.demo.ProjectBackend.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Vendor {
	
	@Id
	private int vId;
	
	private String fName;
	
	private String lName;
	
	private String mobile;
	
	private String company;
	
	private String address;

	public Vendor() {
		super();
	}

	public Vendor(int vId, String fName, String lName, String mobile, String company, String address) {
		super();
		this.vId = vId;
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
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
	
	
	

}
