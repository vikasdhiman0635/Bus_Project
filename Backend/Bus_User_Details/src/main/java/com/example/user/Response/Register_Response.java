package com.example.user.Response;

import com.example.user.Model.User;

import lombok.Data;

@Data
public class Register_Response 
{
	public String messasge;
	
	public String userid;
	
	public String email;
	
	public User user;
	
}
