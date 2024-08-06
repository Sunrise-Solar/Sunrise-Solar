package com.demo.ProjectBackend.Dto;

public class CustomerDto {
	
	private String fName;
	
	private String lName;
	
	private String mobile;
	
	private String email;
	
	private String city;
	
	private String pincode;
	
	private String password;

	public CustomerDto() {
		super();
	}
	
	

	public CustomerDto(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}



	public CustomerDto(String fName, String lName, String mobile, String email, String city, String pincode) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.city = city;
		this.pincode = pincode;
	}



	public CustomerDto(String fName, String lName, String mobile, String email, String city, String pincode,
			String password) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.mobile = mobile;
		this.email = email;
		this.city = city;
		this.pincode = pincode;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
