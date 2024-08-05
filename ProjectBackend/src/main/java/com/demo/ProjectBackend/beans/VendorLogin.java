package com.demo.ProjectBackend.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class VendorLogin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int loginid;
	
	private String email;
	
	private String password;
	
	@OneToOne
	private Vendor vendor;

	public VendorLogin() {
		super();
	}

	public VendorLogin(int loginid, String email, String password, Vendor vendor) {
		super();
		this.loginid = loginid;
		this.email = email;
		this.password = password;
		this.vendor = vendor;
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

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}
	
	

}
