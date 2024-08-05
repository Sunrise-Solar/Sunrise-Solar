package com.demo.ProjectBackend.Dto;

public class VendorDto {
	
	private String fName;
	
	private String lName;
	
	private String mobile;
	
	private String email;

	private String company;
	
	private String address;
	
	private String password;

	public VendorDto() {
		super();
	}

	public VendorDto(String fName, String lName, String mobile, String email, String company, String address) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.company = company;
		this.address = address;
	}

	public VendorDto(String fName, String lName, String mobile, String email, String company, String address, String password) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.company = company;
		this.address = address;
		this.password = password;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	


}
