package com.demo.ProjectBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.Service.VendorService;
import com.demo.ProjectBackend.beans.CustomerLogin;
import com.demo.ProjectBackend.beans.Vendor;
import com.demo.ProjectBackend.beans.VendorLogin;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vservice;
	
	@PostMapping("/vsubmit")
	public String submitvregister(@RequestBody VendorDto vdto) {
		Vendor vendor = vservice.convertFromDto(vdto);
		vservice.add(vendor);
		vservice.addLogin(vdto, vendor);
		return "home";
	}
	
	@PostMapping("/vlsubmit")
	public String submitclogin(@RequestBody VendorDto vdto) {
		VendorLogin vlogin = vservice.authenticate(vdto);
		if(vlogin!=null) {
			System.out.println("login successfull");
			return "vdashboard";
		}else {
			return null;
		}
	}
	

}
