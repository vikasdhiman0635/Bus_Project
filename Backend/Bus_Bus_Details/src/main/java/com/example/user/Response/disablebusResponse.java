package com.example.user.Response;

import com.example.user.Model.BusData;

import lombok.Data;

@Data
public class disablebusResponse 
{
	public String message;
	
	public BusData bus;
}
