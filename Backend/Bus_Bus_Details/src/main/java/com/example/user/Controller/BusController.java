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

import com.example.user.Model.BusData;
import com.example.user.Service.busservice;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/busdata")
public class BusController 
{

	@Autowired
	public busservice service;
	
	@PostMapping("/addbusdata")
	public ResponseEntity<?> savebusdetails(@RequestBody BusData bus)
	{
		return service.savebusdaa(bus);
	}
	
	@GetMapping("/getdatabyuser/{useremail}")
	public ResponseEntity<?> getbusbyowner(@PathVariable("useremail") String useremail)
	{
//		System.out.println(useremail+"mmmmmmmmmm");
		return service.getdatabyowner(useremail);
	}
	
	@GetMapping("/getbusdata/{busnumber}")
	public ResponseEntity<?> getbusdata(@PathVariable("busnumber") String busnumber)
	{
		return service.getdatabybusnumber(busnumber);
	}
	
	@GetMapping("/getdatabybusnumber/{busnumber}")
	public ResponseEntity<?> getdtabybusnumber(@PathVariable("busnumber") String busnumber)
	{
		return service.getdatabybusnumbers(busnumber);
	}

	@PostMapping("/updatedatabybusnumber")
	public ResponseEntity<?> updatebusbybusnumber(@RequestBody BusData bus)
	{
		return service.updatebybusnumber(bus);
	}
	
	@GetMapping("/getbusbyid/{id}")
	public ResponseEntity<?> getbusbyid(@PathVariable("id") long id)
	{
		return service.getbusbyid(id);
	}

	@GetMapping("/deletebus/{id}")
	public String updatebus(@PathVariable("id") long id)
	{
		return service.deletebus(id);
	}
	
	@PostMapping("/disablebusdata")
	public ResponseEntity<?> disable(@RequestBody BusData bus)
	{
//		System.out.println(bus);
		return service.disablebua(bus);
	}
	
	@GetMapping("/getbusbybusnumbeaaar/{busnumber}")
	public ResponseEntity<?> getdatabybusnumber(@PathVariable("busnumber") String busnumber)
	{
		return service.getdatabybusnumberonlyonedata(busnumber);
	}
	

	
}