package com.demo.ProjectBackend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.ProjectBackend.Dao.QuotationRepository;
import com.demo.ProjectBackend.Dao.RequestRepository;
import com.demo.ProjectBackend.Dao.UserRepository;

import com.demo.ProjectBackend.Dao.VendorRepository;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.beans.Quotation;
import com.demo.ProjectBackend.beans.Request;
import com.demo.ProjectBackend.beans.User;
import com.demo.ProjectBackend.beans.Vendor;


import jakarta.validation.Valid;

@Service
public class VendorServiceImpl implements VendorService{
	
	@Autowired
	private VendorRepository vrepo;
	@Autowired
	private UserRepository urepo;
	@Autowired
	private QuotationRepository qrepo;
	@Autowired
	private RequestRepository rrepo;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public Vendor convertFromDto(VendorDto vdto) {
		Vendor vendor = new Vendor(vdto.getfName(),vdto.getlName(),vdto.getMobile(),vdto.getEmail(), vdto.getCompany(),vdto.getAddress());
		return vendor;
	}
	@Override
	public VendorDto convertToDto(Vendor vendor) {
		VendorDto vdto = new VendorDto(vendor.getFName(),vendor.getLName(),vendor.getMobile(),vendor.getEmail(),vendor.getCompany(),vendor.getAddress());
		return vdto;
	}
	@Override
	public void add(Vendor vendor) {
		vrepo.save(vendor);
		
	}
	
	@Override
	public Optional<Vendor> getVendor(int getvId) {
		Optional<Vendor> vendor = vrepo.findById(getvId);
		return vendor;
	}
	@Override
	public void addQuote(Quotation quotation) {
		qrepo.save(quotation);		
	}
	@Override
	public Optional<Request> getRequest(Integer attribute) {
		
		return rrepo.findById(attribute);
	}
	@Override
	public void deleteQuote(int id) {
		qrepo.deleteById(id);
		
	}
	@Override
	public void addUser(VendorDto vdto, Vendor vendor) {
		User user = new User(vdto.getEmail(),passwordEncoder.encode(vdto.getPassword()),"vendor", vendor);
		urepo.save(user);
	}
	
	

}
