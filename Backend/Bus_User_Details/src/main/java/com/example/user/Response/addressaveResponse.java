package com.example.user.Response;

import java.util.List;

import com.example.user.Model.Address;

import lombok.Data;

@Data
public class addressaveResponse 
{
	
	public String message;
	
	public List<Address> address;
	
	public int addresslength;
	
	
}
