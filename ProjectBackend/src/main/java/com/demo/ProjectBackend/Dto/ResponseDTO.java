package com.demo.ProjectBackend.Dto;

import java.util.List;

import com.demo.ProjectBackend.beans.Orders;
import com.demo.ProjectBackend.beans.Quotation;
import com.demo.ProjectBackend.beans.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDTO {
	
	private List<Request> requests;
	private List<Quotation> quotations;
	private List<Orders> orders;

}
