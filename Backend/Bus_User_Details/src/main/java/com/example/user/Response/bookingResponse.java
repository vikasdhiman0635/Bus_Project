package com.example.user.Response;

import java.util.List;

import com.example.user.Model.userBookingDetails;

import lombok.Data;

@Data
public class bookingResponse 
{
	
	public String message;
	
	public List<userBookingDetails> book; 
	
	public int len;
	
}
