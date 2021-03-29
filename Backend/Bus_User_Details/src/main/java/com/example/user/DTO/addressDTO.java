package com.example.user.DTO;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class addressDTO 
{
	
	@NotBlank(message = "address id is not null")
	public long addresstableid;
	
	@NotBlank(message = "user id is not null")
	public String useraddressid;
	
	@NotBlank(message = "address street is not null")
	public String addresstablestreet;
	
	@NotBlank(message = "address city is not null")
	public String addresstablecity;
	
	@NotBlank(message = "address state is not null")
	public String addresstablestate;
	
	@NotBlank(message = "address location is not null")
	public String addresstablelocation;
	
	@NotBlank(message = "address description is not null")
	public String addresstabledesc;
	

}
