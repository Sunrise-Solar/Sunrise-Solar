package com.demo.ProjectBackend.beans;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
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
public class Quotation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int qId;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="r_id")
	private Request request;
	
	@ManyToOne
	@JoinColumn(name="c_id")
	private Customer customer;
	
	@ManyToOne
	@JoinColumn(name="v_id")
	private Vendor vendor;
	
	@NotBlank(message="Required field!")
	private double price;
	@DateTimeFormat(pattern="dd-MM-yyyy")
	@NotBlank(message="Required field!")
	@JsonFormat(pattern="dd-MM-yyyy")
	private LocalDate deliverydate;
	

}
