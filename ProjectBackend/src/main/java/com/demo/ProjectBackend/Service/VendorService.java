package com.demo.ProjectBackend.Service;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.beans.Customer;
import com.demo.ProjectBackend.beans.Vendor;

public interface VendorService {
	
	Vendor convertFromDto(VendorDto vdto);
	
	VendorDto convertToDto(Vendor vendor);

	void add(Vendor Vendor);

	void addLogin(VendorDto vdto, Vendor vendor);

}
