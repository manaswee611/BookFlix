package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

@Service
public class UserService {
   
	
	@Autowired 
	private UserRepository userRepository;  // setter constructor or field injection type 
	
	
	// created a method which will save the user data in the database
	public User createUser(User user){   
		return userRepository.save(user);  //save method returns the saved entity 
	} 
}