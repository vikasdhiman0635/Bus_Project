package com.example.user.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.Model.Address;

public interface AddressRepo extends JpaRepository<Address, Long>
{

	List<Address> findAllByUseraddressid(String useraddressid);

}
