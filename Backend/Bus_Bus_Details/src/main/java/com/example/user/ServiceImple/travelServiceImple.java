package com.example.user.ServiceImple;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.user.Model.travelData;
import com.example.user.Repo.travelRepo;
import com.example.user.Service.travelService;

@Service
public class travelServiceImple implements travelService
{

	@Autowired
	travelRepo repo;

	@Override
	public ResponseEntity<?> deletdata(long travelid) 
	{
		// TODO Auto-generated method stub
		repo.deleteById(travelid);
		return null;
	}

	@Override
	public ResponseEntity<?> getallbuss() 
	{
		List<travelData> travel=repo.findAll();
		return ResponseEntity.ok(travel);
	}

	@Override
	public ResponseEntity<?> getdatabyid(long travelid) 
	{
		travelData travel=repo.findById(travelid).get();
		return ResponseEntity.ok(travel);
	}
	
}
