package com.example.user.DTO;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class travelDTO 
{

	@NotNull
	public long travelid;
	
	@NotNull
	public String traveluseremail;
	
	@NotNull
	public String travelbusfrom;
	
	@NotNull
	public String travelbusto;
	
	@NotNull
	public String travelbusfromtime;
	
	@NotNull
	public String travelbustotime;
	
	@NotNull
	public String travelbusprize;
	
}
