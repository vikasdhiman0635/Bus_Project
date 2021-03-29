package com.example.user.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.Model.BusData;

public interface BusRepo extends JpaRepository<BusData, Long>
{

	boolean existsByBusnumber(String busnumber);

	List<BusData> findAllByBusnumber(String busnumber);

	boolean existsByUseremail(String useremail);

	List<BusData> findAllByUseremail(String useremail);

	BusData findAllById(long id);

	BusData findByBusnumber(String busnumber);
}