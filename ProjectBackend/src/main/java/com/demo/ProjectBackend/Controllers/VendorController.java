package com.demo.ProjectBackend.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
@RequestMapping("/vendor")
public class VendorController {
	
	@Autowired
	private VendorService vservice;
	
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
		System.out.println("quotation: "+quotation.getQId()+quotation.getPrive());
		System.out.println("request: "+request);
		vservice.addQuote(quotation);
		return "vdashboard";
	}
	
	@GetMapping("/deletequote/{id}")
	public String deleteQuote(@PathVariable("id") int id) {
		vservice.deleteQuote(id);
		return "dashboard";
	}
	
	@GetMapping("/vlogout")
	public String vlogout(HttpSession session) {
		session.invalidate();
		return "home";
	}

}
