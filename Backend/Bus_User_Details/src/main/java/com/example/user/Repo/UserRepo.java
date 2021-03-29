package com.example.user.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.user.Model.User;

public interface UserRepo extends JpaRepository<User, Long>
{

	public boolean existsByEmail(String email);

	public boolean existsByEmailAndPassword(String email, String password);

	public User findByEmail(String email);

}
