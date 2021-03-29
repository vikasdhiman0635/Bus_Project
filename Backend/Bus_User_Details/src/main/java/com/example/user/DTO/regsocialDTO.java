package com.example.user.DTO;

import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.example.user.enums.ProvidedBy;

import lombok.Data;

@Data
public class regsocialDTO 
{
	@Email
	@NotBlank(message = "Email is required")
	public String email;
	
	@NotBlank(message = "firstname is required")
	public String firstName;
	
	@NotBlank(message = "id is required")
	public String id;
	
	@NotBlank(message = "lastname is required")
	public String lastName;
	
	@NotBlank(message = "name is required")
	public String name;
	
	@NotBlank(message = "photourl is required")
	public String photoUrl;
	
	@Enumerated
	@NotBlank(message = "provider is required")
	public ProvidedBy provider;
	
}
