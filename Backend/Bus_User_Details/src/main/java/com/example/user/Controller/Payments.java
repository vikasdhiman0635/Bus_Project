package com.example.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.mail.paymentverify;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/paymentverify")
public class Payments 
{
	
	@Autowired
	paymentverify verify;
	
	@GetMapping("/sendotp/{email}")
	public ResponseEntity<?> sendmail(@PathVariable("email") String email)
	{
		System.out.println(email);
		return verify.sendmassage(email);
	}

}