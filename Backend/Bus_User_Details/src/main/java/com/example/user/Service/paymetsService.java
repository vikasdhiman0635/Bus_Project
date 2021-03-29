package com.example.user.Service;

import org.springframework.http.ResponseEntity;

import com.example.user.Model.userBookingDetails;

public interface paymetsService 
{

	ResponseEntity<?> saveseets(userBookingDetails booking);

	ResponseEntity<?> getalldatabyuser(String userid);

}
