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

import com.example.user.Model.userBookingDetails;
import com.example.user.Service.paymetsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/paymentss")
public class paymentController 
{
	
	@Autowired
	paymetsService service;
	
	@PostMapping("/savepayments")
	public ResponseEntity<?> savedata(@RequestBody userBookingDetails booking)
	{
		return service.saveseets(booking);
	}
	
	@GetMapping("/getallpaymentsbyid/{userid}")
	public ResponseEntity<?> getalldatabyuserid(@PathVariable("userid") String userid)
	{
		return service.getalldatabyuser(userid);
	}
	
}