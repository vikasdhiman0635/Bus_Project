package com.example.user.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.Model.travelData;


public interface travelRepo extends JpaRepository<travelData, Long>
{

}
