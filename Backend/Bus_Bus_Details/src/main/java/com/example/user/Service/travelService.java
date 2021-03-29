package com.example.user.Service;

import org.springframework.http.ResponseEntity;

public interface travelService 
{

	ResponseEntity<?> deletdata(long travelid);

	ResponseEntity<?> getallbuss();

	ResponseEntity<?> getdatabyid(long travelid);

}
