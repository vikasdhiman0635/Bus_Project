package com.example.user.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.DTO.busDTO;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/verifybusdata")
public class verifycontroller 
{
	
	@PostMapping()
	public ResponseEntity<busDTO> verifydata(@RequestBody busDTO bus)
	{
		return ResponseEntity.ok(bus);
	}
	
}
