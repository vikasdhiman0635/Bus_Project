package com.example.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.Service.travelService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/traveldata")
public class travelController 
{

	@Autowired
	travelService service;
	
	@GetMapping("/deleteid/{travelid}")
	public ResponseEntity<?> deletid(@PathVariable("travelid") long travelid)
	{
		return service.deletdata(travelid);
	}
	
	@GetMapping("/getallbuss")
	public ResponseEntity<?> getallbuss()
	{
		return service.getallbuss();
	}
	
	@GetMapping("/getdataBytravelId/{travelid}")
	public ResponseEntity<?> getdata(@PathVariable("travelid") long travelid)
	{
		return service.getdatabyid(travelid);
	}
	
}