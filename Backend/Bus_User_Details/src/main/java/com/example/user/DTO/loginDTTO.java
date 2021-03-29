package com.example.user.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class loginDTTO 
{
	@Email
	@NotBlank(message = "Email is required")
	public String email;
	
	@NotBlank(message = "password is required")
	public String password;
}
