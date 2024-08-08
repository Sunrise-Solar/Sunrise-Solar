package com.demo.ProjectBackend.beans;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails{
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int uId;
	
	private String email;
	
	private String password;
	
	private String role;
	
	@OneToOne
	private Customer customer;
	
	@OneToOne
	private Vendor vendor;

	public User(String email, String password, String role, Customer customer) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
		this.customer = customer;
	}

	public User(String email, String password, String role, Vendor vendor) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
		this.vendor = vendor;
	}
	
	public String getRole() {
		return role;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getUsername() {
		return email;
	}
	
	 @Override
	    public boolean isAccountNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isAccountNonLocked() {
	        return true;
	    }

	    @Override
	    public boolean isCredentialsNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isEnabled() {
	        return true;
	    }
	
	
	
	

}
