package com.demo.ProjectBackend.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@GetMapping("/register")
	public String register() {
		return "chooseregister";
	}
	
	@GetMapping("/cregister")
	public String cregister() {
		return "cregisterform";
	}
	
	@GetMapping("vregister")
	public String vregister() {
		return "vregisterform";
	}
	
	@GetMapping("/login")
	public String login() {
		return "chooselogin";
	}
	
	@GetMapping("clogin")
	public String clogin() {
		return "cloginform";
	}
	
	@GetMapping("vlogin")
	public String vlogin() {
		return "vloginform";
	}
	
	@GetMapping("about")
	public String about() {
		return "about";
	}

}
