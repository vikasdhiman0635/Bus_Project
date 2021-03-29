package com.example.user.DTO;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class weekDTO 
{
	@NotNull
	public long id;

	@NotNull
    public String weekuseremail;

	@NotNull
    public boolean sunday;

	@NotNull
    public boolean monday;

	@NotNull
    public boolean tuesday;

	@NotNull
    public boolean wednesday;

	@NotNull
    public boolean thuesday;

	@NotNull
    public boolean friday;

	@NotNull
    public boolean saturday;
}
