package com.demo.ProjectBackend.beans;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Quotation {
	
	@Id
	private int qId;
	
	@OneToOne
	private Request request;
	
	private Vendor vendor;
	
	private double prive;
	
	private LocalDate deliverydate;
	
	private MultipartFile quote;

	public Quotation() {
		super();
	}

	public Quotation(int qId, Request request, Vendor vendor, double prive, LocalDate deliverydate,
			MultipartFile quote) {
		super();
		this.qId = qId;
		this.request = request;
		this.vendor = vendor;
		this.prive = prive;
		this.deliverydate = deliverydate;
		this.quote = quote;
	}

	public int getqId() {
		return qId;
	}

	public void setqId(int qId) {
		this.qId = qId;
	}

	public Request getRequest() {
		return request;
	}

	public void setRequest(Request request) {
		this.request = request;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public double getPrive() {
		return prive;
	}

	public void setPrive(double prive) {
		this.prive = prive;
	}

	public LocalDate getDeliverydate() {
		return deliverydate;
	}

	public void setDeliverydate(LocalDate deliverydate) {
		this.deliverydate = deliverydate;
	}

	public MultipartFile getQuote() {
		return quote;
	}

	public void setQuote(MultipartFile quote) {
		this.quote = quote;
	}
	
	
	

}
