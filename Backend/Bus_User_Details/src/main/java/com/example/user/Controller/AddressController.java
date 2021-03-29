package com.example.user.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.DTO.addressDTO;
import com.example.user.Model.Address;
import com.example.user.Service.AddressService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/address")
public class AddressController 
{
	
	@Autowired
	AddressService service;
	
	@PostMapping("/addAddress")
	public ResponseEntity<?> addAddress(@RequestBody List<Address> address)
	{
		return service.addaddress(address);
	}
	
	@PostMapping("/updateAddress")
	public ResponseEntity<?> updateAddress(@RequestBody addressDTO address)
	{
		return service.updateaddress(address);
	}
	
	@GetMapping("/getaddressByid/{useraddressid}")
	public ResponseEntity<?> updateAddress(@PathVariable("useraddressid") String useraddressid)
	{
		return service.getdatabyidaddress(useraddressid);
	}
	
	@DeleteMapping("/deleteByid/{addresstableid}")
	public ResponseEntity<?> deleteAddress(@PathVariable("addresstableid") Long addresstableid)
	{
		return service.deleteidaddress(addresstableid);
	}
}