package com.example.user.DTO;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class BusSeatDTO 
{

	@NotNull
	public long seatid;
	
	@NotNull
	public int seatnumber;
	
	@NotNull
	public String busidd;
	
	@NotNull
	public String seatstatus;
	
	@NotNull
	public String useremail;
	
	
}
