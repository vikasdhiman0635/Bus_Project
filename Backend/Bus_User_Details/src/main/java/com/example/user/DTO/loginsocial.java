package com.example.user.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class loginsocial 
{
	@Email
	@NotBlank(message = "Email is required")
	public String email;
	
	@NotBlank(message = "id is required")
	public String id;
}
