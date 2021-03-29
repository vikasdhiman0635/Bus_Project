package com.example.user.Service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.user.DTO.addressDTO;
import com.example.user.Model.Address;

public interface AddressService {

	ResponseEntity<?> addaddress(List<Address> address);

	ResponseEntity<?> updateaddress(addressDTO address);

	ResponseEntity<?> getdatabyidaddress(String useraddressid);

	ResponseEntity<?> deleteidaddress(Long addresstableid);

}
