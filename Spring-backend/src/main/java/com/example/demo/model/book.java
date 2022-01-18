package com.example.demo.model;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="books")

public class book {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="bookName")
	private String bookName;
	
	@Column(name="bookAuthor")
	private String bookAuthor;
	
	@Column(name="bookPdf")
	private String bookPdf;
	
	public book() {
		
	}

	public book(String bookName, String bookAuthor, String bookPdf) {
		super();
		this.bookName = bookName;
		this.bookAuthor = bookAuthor;
		this.bookPdf = bookPdf;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookAuthor() {
		return bookAuthor;
	}

	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}

	public String getBookPdf() {
		return bookPdf;
	}

	public void setBookPdf(String bookPdf) {
		this.bookPdf = bookPdf;
	}
}
