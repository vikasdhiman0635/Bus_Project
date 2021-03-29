package com.example.user.Service;

import org.springframework.http.ResponseEntity;

import com.example.user.Model.BusData;

public interface busservice {

	public ResponseEntity<?> savebusdaa(BusData bus);

	public ResponseEntity<?> getdatabyowner(String useremail);

	public ResponseEntity<?> getdatabybusnumber(String busnumber);

	public ResponseEntity<?> getdatabybusnumbers(String busnumber);

	public ResponseEntity<?> updatebybusnumber(BusData bus);

	ResponseEntity<?> getbusbyid(long id);

	public String deletebus(long id);

	public ResponseEntity<?> disablebua(BusData bus);

	public ResponseEntity<?> getdatabybusnumberonlyonedata(String busnumber);
}
