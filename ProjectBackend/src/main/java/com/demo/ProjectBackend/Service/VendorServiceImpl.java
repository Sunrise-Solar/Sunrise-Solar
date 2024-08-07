package com.demo.ProjectBackend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.ProjectBackend.Dao.QuotationRepository;
import com.demo.ProjectBackend.Dao.RequestRepository;
import com.demo.ProjectBackend.Dao.VendorLoginRepository;
import com.demo.ProjectBackend.Dao.VendorRepository;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.beans.Quotation;
import com.demo.ProjectBackend.beans.Request;
import com.demo.ProjectBackend.beans.Vendor;
import com.demo.ProjectBackend.beans.VendorLogin;

@Service
public class VendorServiceImpl implements VendorService{
	
	@Autowired
	private VendorRepository vrepo;
	@Autowired
	private VendorLoginRepository vlrepo;
	@Autowired
	private QuotationRepository qrepo;
	@Autowired
	private RequestRepository rrepo;
	
	@Override
	public Vendor convertFromDto(VendorDto vdto) {
		Vendor vendor = new Vendor(vdto.getfName(),vdto.getlName(),vdto.getMobile(),vdto.getEmail(), vdto.getCompany(),vdto.getAddress());
		return vendor;
	}
	@Override
	public VendorDto convertToDto(Vendor vendor) {
		VendorDto vdto = new VendorDto(vendor.getfName(),vendor.getlName(),vendor.getMobile(),vendor.getEmail(),vendor.getCompany(),vendor.getAddress());
		return vdto;
	}
	@Override
	public void add(Vendor vendor) {
		vrepo.save(vendor);
		
	}
	@Override
	public void addLogin(VendorDto vdto, Vendor vendor) {
		VendorLogin vlogin = new VendorLogin(vdto.getEmail(), vdto.getPassword(), vendor);
		vlrepo.save(vlogin);
		
	}
	@Override
	public VendorLogin authenticate(VendorDto vdto) {
		VendorLogin vlogin = vlrepo.findByEmail(vdto.getEmail());
		if(vlogin!=null && vdto.getPassword().equals(vlogin.getPassword())) {
			return vlogin;
		}else { 
			return null;
		}
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
	

}
