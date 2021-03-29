package com.example.user.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "seats")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class busSeats 
{
	@Id
	@GeneratedValue
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
