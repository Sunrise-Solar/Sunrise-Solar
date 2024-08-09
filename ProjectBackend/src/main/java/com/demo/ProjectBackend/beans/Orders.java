package com.demo.ProjectBackend.beans;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Orders {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int oId;
	
	private String  orderStatus;
	
	private String paymentStatus;
	@OneToOne
	private Quotation quotation;
	
	private String orderDate;
	@ManyToOne
	@JoinColumn(name="c_id")
	private Customer customer;
	@ManyToOne
	@JoinColumn(name="v_id")
	private Vendor vendor;
	
	
	public Orders(String orderStatus, String paymentStatus, Quotation quotation, String orderDate, Customer customer,
			Vendor vendor) {
		super();
		this.orderStatus = orderStatus;
		this.paymentStatus = paymentStatus;
		this.quotation = quotation;
		this.orderDate = orderDate;
		this.customer = customer;
		this.vendor = vendor;
	}

	
	

	

	

}
