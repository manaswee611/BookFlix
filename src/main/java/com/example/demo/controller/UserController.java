package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;
import com.example.demo.repo.bookRepository;

@RestController
@RequestMapping("/")

public class UserController {
	
	
	@Autowired
	private UserRepository userRepository;
	private bookRepository bookRepository;
	
	
	//get all user
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
		
	}
	//get all books
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
		
	}
}
