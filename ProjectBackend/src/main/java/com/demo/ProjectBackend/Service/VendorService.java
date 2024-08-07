package com.demo.ProjectBackend.Service;

import java.util.Optional;

import com.demo.ProjectBackend.beans.Request;
import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.Quotation;
import com.demo.ProjectBackend.beans.Vendor;
import com.demo.ProjectBackend.beans.VendorLogin;

public interface VendorService {
	
	Vendor convertFromDto(VendorDto vdto);
	
	VendorDto convertToDto(Vendor vendor);

	void add(Vendor Vendor);

	void addLogin(VendorDto vdto, Vendor vendor);

	VendorLogin authenticate(VendorDto vdto);

	Optional<Vendor> getVendor(int getvId);

	void addQuote(Quotation quotation);

	Optional<Request> getRequest(Integer attribute);

}
