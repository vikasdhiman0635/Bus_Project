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
@Table(name = "traveldeatils")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class travelData 
{
	
	@Id
	@GeneratedValue
	public long travelid;
	
	@NotNull
	public String travelbusnumber;
	
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
