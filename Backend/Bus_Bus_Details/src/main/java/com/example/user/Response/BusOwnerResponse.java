package com.example.user.Response;

import java.util.List;

import com.example.user.Model.BusData;

import lombok.Data;

@Data
public class BusOwnerResponse 
{
	public String message;
	
	public int size;
	
	public boolean check;
	
	public List<BusData> bus;
}
