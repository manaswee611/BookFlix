package com.example.demoController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DemoModel.User;
import com.example.demoRepo.UserRepository;

@RestController
@RequestMapping("/api/v1/")

public class UserController {
	
	
	@Autowired
	private UserRepository userRepository;
	
	
	//get all user
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
		
	}

	
}