package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.model.book;
import com.example.demo.model.feedback;
import com.example.demo.model.orderDetails;
import com.example.demo.repo.UserRepository;
import com.example.demo.repo.bookRepository;
import com.example.demo.repo.feedbackRepository;
import com.example.demo.repo.orderDetailsRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/")

public class UserController {
	
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private orderDetailsRepository orderDetailsRepository;
	@Autowired
	private feedbackRepository feedbackRepository;
	@Autowired
	private bookRepository bookRepository;
	
	
	//get all user
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	//get all details
	@GetMapping("/orderDetails")
	public List<orderDetails> getAllDetails(){
		return orderDetailsRepository.findAll();
		
	}
	
	@GetMapping("/feedbacks")
	public List<feedback> getAllFeedbacks(){
		return feedbackRepository.findAll();
	}
	@CrossOrigin(origins="*")
	@GetMapping("/books")
	public List<book> getAllBooks(){
		return bookRepository.findAll();
	}
	//create book rest api
	@PostMapping("/books")
	public book createBook(@RequestBody book books) {
		return bookRepository.save(books);
	}
	
	//get book detail by id
	@GetMapping("/books/{id}")
	public ResponseEntity<book> getBookById(@PathVariable Long id){
		book books = bookRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("book with id "+id+" does not exist."));
		return ResponseEntity.ok(books);
	}

	//update book rest api
	@PutMapping("/books/{id}")
	public ResponseEntity<book> updateBook(@PathVariable Long id, @RequestBody book bookDetails){
		book books = bookRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("book with id "+id+" does not exist."));
		
		books.setBookName(bookDetails.getBookName());
		books.setBookAuthor(bookDetails.getBookAuthor());
		books.setBookPdf(bookDetails.getBookPdf());
		
		book updateBook = bookRepository.save(books);
		return ResponseEntity.ok(updateBook);
	}
}
