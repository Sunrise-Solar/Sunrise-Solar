package com.demo.ProjectBackend.beans;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Quotation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int qId;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Request request;
	
	@OneToOne
	private Vendor vendor;
	
	private double prive;
	@DateTimeFormat(pattern="dd-MM-yyyy")
	@JsonFormat(pattern="dd-MM-yyyy")
	private LocalDate deliverydate;
	

}
