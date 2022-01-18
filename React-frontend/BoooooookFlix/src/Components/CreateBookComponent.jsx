import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import HeaderComponent from "./HeaderComponent";

export function CreateBookComponent(){
    let navigate = useNavigate();
    const[bookName,setBookName] = useState('')
    const[bookAuthor,setBookAuthor] = useState('')
    const[bookPdf,setBookPdf] = useState('')

    const saveBook = (b)=>{
                b.preventDefault();
                let book = {bookName : bookName,bookAuthor:bookAuthor,bookPdf:bookPdf};
                console.log('book => '+JSON.stringify(book));
                UserService.createBook(book).then(res=>{
                    navigate("/books");
    });
    }
    // changeBookNameHandler=(event)=>{
    //     this.setState({bookName : event.target.value});
    // }
    // changeBookAuthorHandler=(event)=>{
    //     this.setState({bookAuthor : event.target.value});
    // }
    // changeBookPdfHandler=(event)=>{
    //     this.setState({bookPdf : event.target.value});
    // }
        return <div> <HeaderComponent/>
                    <h3 className="text-center"  style={{textAlign:"center",color:"black"}}>Add book</h3>
                    <div className="container">
                    <form>
                        <div className="form-group">
                            <label style={{color:"black"}}>Book Name :</label>
                            <input placeholder="Book Name" className="form-control" value={bookName} onChange={bn=>setBookName(bn.target.value)} required="required"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label style={{color:"black"}}>Book Author :</label>
                             <input placeholder="Book Author" className="form-control" value={bookAuthor} onChange={ba=>setBookAuthor(ba.target.value)} required="required"/>
                         </div>
                         <br/>
                         <div className="form-group">
                             <label style={{color:"black"}}>Book Upload :</label>
                             <input type="file" placeholder="Book Pdf" className="form-control" value={bookPdf} onChange={bp=>setBookPdf(bp.target.value)} required="required"/>
                        </div>
                        <br/>
                        <button className="btn btn-success" onClick={(e)=>saveBook(e)}>Save</button>
                         <button className="btn btn-danger" onClick={()=>navigate("/books")}>Cancel</button>
                    </form>
                    </div>
                 </div>
    
}