package com.example.user.ServiceImple;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.user.DTO.addressDTO;
import com.example.user.Model.Address;
import com.example.user.Repo.AddressRepo;
import com.example.user.Response.addressaveResponse;
import com.example.user.Response.updateaddressresponse;
import com.example.user.Service.AddressService;


@Service
public class AddressServiceImple implements AddressService
{

	@Autowired
	AddressRepo repo;

	@Override
	public ResponseEntity<addressaveResponse> addaddress(List<Address> address)
	{
		
		addressaveResponse res=new addressaveResponse();
		
		res.setAddress(repo.saveAll(address));
		
		res.setAddresslength(address.size());
		
		if(res.getAddresslength()!=0)
		{
			res.setMessage("Save Address");
			return ResponseEntity.ok(res);
		}
		else
		{
			res.setMessage("Their have no address");
			return ResponseEntity.ok(res);
		}
	}

	@Override
	public ResponseEntity<updateaddressresponse> updateaddress(addressDTO address) 
	{
		updateaddressresponse res = new updateaddressresponse();
				
		ModelMapper mapper = new ModelMapper();
		Address add = mapper.map(address, Address.class);
		
		res.setAddress(repo.save(add));
		
		if(res.getAddress()!=null)
		{
			res.setMessage("Address Updated");
			return ResponseEntity.ok(res);
		}
		else
		{
			res.setMessage("Any Error");
			return ResponseEntity.ok(res);
		}
	}

	@Override
	public ResponseEntity<List<Address>> getdatabyidaddress(String useraddressid) 
	{
		List<Address> add= repo.findAllByUseraddressid(useraddressid);
		return ResponseEntity.ok(add);
	}

	@Override
	public ResponseEntity<String> deleteidaddress(Long addresstableid) 
	{
		repo.deleteById(addresstableid);
		if(!repo.existsById(addresstableid))
		{
			return ResponseEntity.ok("Address Delete successful");
		}
		else
		{
			return ResponseEntity.ok("Address is not Delete successful, please try after some time");
		}
	}

}
