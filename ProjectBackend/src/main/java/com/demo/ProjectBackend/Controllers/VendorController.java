package com.demo.ProjectBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.Service.VendorService;
import com.demo.ProjectBackend.beans.Vendor;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vservice;
	
	@PostMapping("/vsubmit")
	public void submitvregister(@RequestBody VendorDto vdto) {
		Vendor vendor = vservice.convertFromDto(vdto);
		vservice.add(vendor);
		vservice.addLogin(vdto, vendor);
	}
	

}
