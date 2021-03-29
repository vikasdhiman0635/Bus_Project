package com.example.user.Random;

import java.util.Random;

public class registeridgetter 
{
	public Integer getrandomnumber() 
	{
		Random rand = new Random();
		int fileval = rand.nextInt(1000000000);
		return fileval;
	}

	public Integer getrandomvarify()
	{
		Random rand = new Random();
		int fileval = rand.nextInt(10000);
		return fileval;
	}

}
