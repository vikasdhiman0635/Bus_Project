package com.example.user.DTO;

import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.example.user.enums.Who_are_you;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO 
{

	public long id;
	
	@Email
	public String email;
	
	@NotNull
	public String firstname;
	
	@NotNull
	public String lastname;
	
	public String date;
	
	public String time;
	
	@NotNull
	public String password;
	
	public String avatar;
	
	public boolean completeprofile;
	
	public String userid;
	
	@Enumerated
	public Who_are_you whoareyou;
	
}