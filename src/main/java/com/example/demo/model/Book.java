package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;


@Entity
@Table(name="books")

public class Book {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="book_name")
	private String book_name;
	
	@Column(name="book_author")
	private String book_author;
	
	@Column(name="book_pdf")
	@Lob
	private byte[] book_pdf;
	
	@Column(name="book_audio")
	@Lob
	private byte[] book_audio;

	public Book() {
		
	}
	public Book(String book_name, String book_author, byte[] book_pdf, byte[] book_audio) {
		super();
		this.book_name = book_name;
		this.book_author = book_author;
		this.book_pdf = book_pdf;
		this.book_audio = book_audio;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getBook_author() {
		return book_author;
	}
	public void setBook_author(String book_author) {
		this.book_author = book_author;
	}
	public byte[] getBook_pdf() {
		return book_pdf;
	}
	public void setBook_pdf(byte[] book_pdf) {
		this.book_pdf = book_pdf;
	}
	public byte[] getBook_audio() {
		return book_audio;
	}
	public void setBook_audio(byte[] book_audio) {
		this.book_audio = book_audio;
	}
}