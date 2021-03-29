package com.example.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.DTO.loginDTTO;
import com.example.user.DTO.loginsocial;
import com.example.user.DTO.registerDTO;
import com.example.user.DTO.regsocialDTO;
import com.example.user.Model.User;
import com.example.user.Service.Userservices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	Userservices service;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody loginDTTO login) {
//		System.out.println(login);
		return service.login(login);
	}

	@PostMapping("/soclogin")
	public ResponseEntity<?> soclogin(@RequestBody loginsocial login) {
		System.out.println(login);
		return service.soclogin(login);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> saveuser(@RequestBody registerDTO register) {
//		System.out.println(register);
		return service.saveuser(register);
	}

	@PostMapping("/regsocial")
	public ResponseEntity<?> socialreg(@RequestBody regsocialDTO refsocial) {
		return service.regsocial(refsocial);
	}

	@GetMapping("/getdataByid/{email}")
	public User getdata(@PathVariable("email") String email) {
		return service.getdatabyid(email);
	}

	@PostMapping("/updateprofile")
	public ResponseEntity<?> updateprofile(@RequestBody User user)
	{
		return service.updateuser(user);
	}
	
}
