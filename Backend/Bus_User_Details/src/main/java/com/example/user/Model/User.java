package com.example.user.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import com.example.user.enums.Gender;
import com.example.user.enums.ProvidedBy;
import com.example.user.enums.Who_are_you;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User 
{

	@Id
	public long id;
	
	@Email
	public String email;
	
	public String firstname;
	
	public String lastname;
	
	@Enumerated(value = EnumType.STRING)
	public Gender gender;
	
	public String mobileno;
	
	public String description;
	
	public Date date;
	
	public String time;
	
	public String password;
	
	@Enumerated(value = EnumType.STRING)
	public ProvidedBy providedby;
	
	@Column(length = 100000)
	public String avatar;
	
	public boolean completeprofile;
	
	public String userid;
	
	@Enumerated(value = EnumType.STRING)
	public Who_are_you whoareyou;
	
	public String modifydate;
	
	public String modifytime;
	
	public String location;
	
	public String normality;
}
