package com.example.user.Response;

import com.example.user.Model.User;

import lombok.Data;

@Data
public class loginResponse 
{
	public String message;
	
	public String userid;
	
	public String email;
	
	public User user;
	
}
