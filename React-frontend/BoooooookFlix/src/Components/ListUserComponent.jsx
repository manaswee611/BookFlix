import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from './HeaderComponent';


class ListUserComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={
            user:[]
        }

    }
    
    componentDidMount(){
         UserService.getUsers().then((res) => {
             this.setState({user: res.data})
            });
        
        
    }
    // addBook=(props)=>{
    //     let navigate = useNavigate();
    //     // navigate("/addBooks");
    // }
    render() {
        return (
            <div> 
                <HeaderComponent/>
            <h2 style={{textAlign:"center",color:"black"}}>User List</h2> 
            <Link to='/'><button className='btn btn-primary'>Back</button></Link>
            
            <br/>
            <div className="container">
                <br/>
                   <table className="table table-striped table-bordered" style={{color:"black"}}>

                    <thead style={{color:"black"}}>
                        <tr style={{color:"black"}}>
                            <th style={{color:"black"}}>Email Id</th>
                            <th style={{color:"black"}}>First Name</th>
                            <th style={{color:"black"}}>Last Name</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.user.map(
                                    user =>
                                    <tr key ={user.id}>
                                        <td>{user.emailid}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>

                                    </tr>

                                )}
                            
                        </tbody>
                   
                </table>
            </div>
            </div>
        );
    }
}

export default ListUserComponent;