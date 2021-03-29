package com.example.user.DTO;

import java.util.List;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.example.user.enums.ac;
import com.example.user.enums.fasttag;
import com.example.user.enums.identityName;
import com.example.user.enums.issue;
import com.example.user.enums.type;
import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class busDTO 
{
	
	@NotNull
	public long id;
	
	@NotNull
	public String useremail;
	
	@NotNull
	public String busnumber;
	
	@NotNull
	@Enumerated(value = EnumType.STRING)
	public type bustype;
	
	@NotNull
	public String bustravelFrom;
	
	@NotNull
	public String bustravelTo;
	
	@NotNull
	public String startingtime;
	
	@NotNull
	@Enumerated(value = EnumType.STRING)
	public issue busissue;
	
	@NotNull
	public String stoptime;
	
	@NotNull
	@Enumerated(value = EnumType.STRING)
	public fasttag busfastTag;
	
	@NotNull
	@Enumerated(value = EnumType.STRING)
	public ac busac;
	
	@NotNull
	public String howmanyseat;
	
	public int buscheckpoints;
	
	@NotNull
	public boolean busstatus;
	
	@NotNull
	public String driverfirstname;
	
	@NotNull
	public String driverlastname;
	
	@Enumerated(value = EnumType.STRING)
	@NotNull
	public issue driverissue;
	
	@NotNull
	public String driverlicance;
	
	@Enumerated(value = EnumType.STRING)
	@NotNull
	public identityName driveridentityname;
	
	@NotNull
	public String driverideantitynumber;
	
	@NotNull
	public String ttfirstname;

	@NotNull
	public String busdelete;

	@NotNull
	public String ttlastname;
	
	@Enumerated(value = EnumType.STRING)
	@NotNull
	public issue ttissue;
		
	@Enumerated(value = EnumType.STRING)
	@NotNull
	public identityName ttidentitysname;
	
	public String ttideantitynumber;
	
	private List<travelDTO> travel;
	
	private List<BusSeatDTO> seat;

	private List<weekDTO> weeks;
	
}
