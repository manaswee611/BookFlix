import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './myStyle.css';
import HeaderComponent from './HeaderComponent';

export class BookComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={
            Book:[]
        }
        this.deleteBook =this.deleteBook.bind(this)

    }
    deleteBook(id){
        UserService.deleteBook(id).then((res) =>{
            this.setState({Book:this.state.Book.filter(book =>book.id!==id)})

        });
    }
    

    componentDidMount(){
         UserService.getBooks().then((res) => {
             this.setState({Book: res.data})
            });
        
        
    }
    
    render() {
        return<div> 
            <HeaderComponent/>
            <div className='container'>
            <h2 style={{textAlign:"center",color:"black"}}>Book List</h2>  
            <Link to='/'><button className='btn btn-secondary'>Back</button></Link>
            <Link to='/addBooks'><button className='btn btn-secondary'>Add Book</button></Link>
            <br/>
            <br/>
            <div className="row">
                   <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th style={{color:"black"}}>Book Name</th>
                            <th style={{color:"black"}}>Book Author</th>
                            <th style={{color:"black"}}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Book.map(
                                    b =>
                                    <tr key ={b.id}>
                                        <td>{b.bookName}</td>
                                        <td>{b.bookAuthor}</td>
                
                                        <td>
                                            <Link to={`/updateBook/${b.id}`}><button className='btn btn-info'>Update</button></Link>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBook(b.id)} className='btn btn-danger'>Delete</button>
                                        </td>

                                    </tr>

                                )}
                            
                        </tbody>
                   
                </table>
            </div>
            </div>
            </div>
        
    }
}

