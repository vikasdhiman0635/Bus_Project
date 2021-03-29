package com.example.user.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class registerDTO 
{
	@NotBlank(message = "email is required")
	@Email
	public String email;
	
	@NotBlank(message = "First name is required")
	public String firstname;
	
	@NotBlank(message = "Last Name is required")
	public String lastname;
	
	@NotBlank(message = "Password is required")
	public String newpassword;
	
	@NotBlank(message = "Password is required")
	public String cpassword;
}
