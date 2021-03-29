package com.example.user.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.Model.userBookingDetails;

public interface Paymentrepo extends JpaRepository<userBookingDetails, Long> 
{

	List<userBookingDetails> findAllByUserid(String userid);

}
