package com.demo.ProjectBackend.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ProjectBackend.Dto.CustomerDto;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.Service.VendorService;
import com.demo.ProjectBackend.beans.CustomerLogin;
import com.demo.ProjectBackend.beans.Quotation;
import com.demo.ProjectBackend.beans.Request;
import com.demo.ProjectBackend.beans.Vendor;
import com.demo.ProjectBackend.beans.VendorLogin;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vservice;
	
	@PostMapping("/vsubmit")
	public String submitvregister(@Valid@RequestBody VendorDto vdto, BindingResult result) {
		if(result.hasErrors()) {
			return "vregister";
		}
		Vendor vendor = vservice.convertFromDto(vdto);
		vservice.add(vendor);
		vservice.addLogin(vdto, vendor);
		return "home";
	}
	
	@PostMapping("/vlsubmit")
	public String submitclogin(@RequestBody VendorDto vdto, HttpSession session) {
		VendorLogin vlogin = vservice.authenticate(vdto);
		if(vlogin!=null) {
			Optional<Vendor> vendor1= vservice.getVendor(vlogin.getVendor().getvId());
			Vendor vendor = vendor1.get();
			System.out.println("login successfull");
			session.setAttribute("user", vendor);
			return "vdashboard";
		}else {
			return null;
		}
	}
	
	@GetMapping("/sendquote/{rid}")
	public String sendQuote(@PathVariable("rid") int rid, HttpSession session) {
		session.setAttribute("requestid", rid);
		return "quoteform";
	}
	
	@PostMapping("/submitquote")
	public String submitQuote(@RequestBody Quotation quotation, HttpSession session) {
		Vendor vendor = (Vendor) session.getAttribute("user");
		System.out.println("vendor: "+vendor);
		
		Optional<Request> req = vservice.getRequest((Integer)session.getAttribute("requestid"));
		Request request = req.get();
		quotation.setVendor(vendor);
		quotation.setRequest(request);
		System.out.println("quotation: "+quotation.getqId()+quotation.getPrive());
		System.out.println("request: "+request);
		vservice.addQuote(quotation);
		return "vdashboard";
	}
	
	@GetMapping("/vlogout")
	public String vlogout(HttpSession session) {
		session.invalidate();
		return "home";
	}

}
