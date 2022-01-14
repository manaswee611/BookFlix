package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.book;
import com.example.demo.model.orderDetails;

@Repository
public interface bookRepository extends JpaRepository<book,Long>{

}