package com.example.user.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.Model.busSeats;

public interface seatsRepo extends JpaRepository<busSeats, Long>
{

    List<busSeats> findAllByBusidd(String busidd);
}
