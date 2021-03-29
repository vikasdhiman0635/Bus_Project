package com.example.user.ServiceImple;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.user.Model.userBookingDetails;
import com.example.user.Repo.Paymentrepo;
import com.example.user.Response.bookingResponse;
import com.example.user.Response.saveseetRespo;
import com.example.user.Service.paymetsService;


@Service
public class paymentServiceImple implements paymetsService
{

	@Autowired
	Paymentrepo repo;

	@Override
	public ResponseEntity<?> saveseets(userBookingDetails booking) 
	{
		saveseetRespo response=new saveseetRespo();
		userBookingDetails us=repo.save(booking);
		if(us!=null)
		{
			response.setMessage("Order Recevied");
			response.setUser(us);
			return ResponseEntity.ok(response);
		}
		else
		{
			response.setMessage("Order not Recevied");
			return ResponseEntity.ok(response);
		}
	}

	@Override
	public ResponseEntity<?> getalldatabyuser(String userid) 
	{
		bookingResponse res= new bookingResponse();
		
		List<userBookingDetails> bs=repo.findAllByUserid(userid);
		System.out.println(bs);
		if(bs.size()!=0)
		{
			res.setBook(bs);
			res.setMessage("Operation Succesfull");
			res.setLen(res.getBook().size());
		}
		else
		{
			res.setMessage("Operation is not Succesfull");
		}
		
		return ResponseEntity.ok(res);
	}
	
}
