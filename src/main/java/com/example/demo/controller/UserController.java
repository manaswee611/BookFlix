package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;
import com.example.demo.model.feedback;
import com.example.demo.model.orderDetails;
import com.example.demo.repo.UserRepository;
import com.example.demo.repo.feedbackRepository;
import com.example.demo.repo.orderDetailsRepository;

@RestController
@RequestMapping("/")

public class UserController {
	
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private orderDetailsRepository orderDetailsRepository;
	@Autowired
	private feedbackRepository feedbackRepository;
	
	
	//get all user
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
		
	}
	//get all details
	@GetMapping("/orderDetails")
	public List<orderDetails> getAllBooks(){
		return orderDetailsRepository.findAll();
		
	}
	
	@GetMapping("/feedbacks")
	public List<feedback> getAllFeedbacks(){
		return feedbackRepository.findAll();
	}
}
