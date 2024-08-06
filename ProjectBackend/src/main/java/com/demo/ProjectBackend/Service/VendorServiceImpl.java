package com.demo.ProjectBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.ProjectBackend.Dao.VendorLoginRepository;
import com.demo.ProjectBackend.Dao.VendorRepository;
import com.demo.ProjectBackend.Dto.VendorDto;
import com.demo.ProjectBackend.beans.Vendor;
import com.demo.ProjectBackend.beans.VendorLogin;

@Service
public class VendorServiceImpl implements VendorService{
	
	@Autowired
	private VendorRepository vrepo;
	@Autowired
	private VendorLoginRepository vlrepo;
	
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
		if(vlogin!=null && vdto.getPassword()==vlogin.getPassword()) {
			return vlogin;
		}else { 
			return null;
		}
	}
	

}
