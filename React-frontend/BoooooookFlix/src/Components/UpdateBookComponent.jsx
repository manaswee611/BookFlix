import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserService from "../services/UserService";
import HeaderComponent from "./HeaderComponent";

export function UpdateBookComponent(){
    let navigate = useNavigate();
    const[bookName,setBookName] = useState('')
    const[bookAuthor,setBookAuthor] = useState('')
    const[bookPdf,setBookPdf] = useState('')
    const[selectedFile, setSelectedFile] = useState();

    function changeHandler (event){
        setSelectedFile(event.target.files[0]);
    }
    let params = useParams();
    let id = params.id

    useEffect(()=>{
        UserService.getBookById(id).then((res)=>{
            let bd = res.data;
            setBookName(bd.bookName)
            setBookAuthor(bd.bookAuthor)
            setBookPdf(bd.bookPdf)
            
    });
    },[]);
    const updateBook = (b)=>{
                b.preventDefault();
                   
                let book = {bookName : bookName,bookAuthor:bookAuthor,bookPdf:bookPdf};
                console.log('book => '+JSON.stringify(book));
                UserService.updateBook(book, id).then(res=>{
                    navigate("/books");
                })
                
    }
    
        return <div> <HeaderComponent/>
                    <h3 className="text-center">Update book</h3>
                    <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Book Name :</label>
                            <input placeholder="Book Name" className="form-control" value={bookName} onChange={bn=>setBookName(bn.target.value)} required="required"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Book Author :</label>
                             <input placeholder="Book Author" className="form-control" value={bookAuthor} onChange={ba=>setBookAuthor(ba.target.value)} required="required"/>
                         </div>
                         <br/>
                         <div className="form-group">
                             <label>Book Upload :</label>
                             <input type="file" placeholder="Book Pdf" className="form-control"  onChange={changeHandler} required="required"/>
                        </div>
                        <br/>
                        <button className="btn btn-success" onClick={updateBook}>Save</button>
                         <button className="btn btn-danger" onClick={()=>navigate("/books")}>Cancel</button>
                    </form>
                    </div>
                 </div>
    
}