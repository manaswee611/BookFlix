import React from "react";
import { Link } from "react-router-dom";



export default function Nav(){
    return (
        <div>
             <nav className='nav1'>
        <div className="logo"><p>BOOKFLIX</p></div>
        <ul>
            <li className="active">
                <Link to ="/home">Home</Link></li>
                <li><Link to= "/feature">Feature</Link></li>
                
                <li>
                <a href="#">SignIn
                
                </a>
                <ul>
                <li><Link to="/login" style={{paddingRight:"70px"}}>Sign In</Link></li>
                <li><Link to ="/adminlogin" style={{textTransform:"capitalize",paddingRight:"70px"}}>Admin</Link></li>
                <li><Link to="/signin" style={{paddingRight:"70px"}}>Register</Link></li>
                </ul>
             </li>
            <li>
                <a href="#">Category
                
                </a>
                <ul>
                    {/* <li><Link to ="/adminlogin" style={{textTransform:"capitalize",paddingRight:"70px"}}>Admin */}
                        
                        {/* </Link></li> */}
                    <li>
                        <a href="#" style={{textTransform:"capitalize"}}>Persons
                        <i className="fas fa-caret-right"></i>
                        </a>
                        <ul>
                           <li><Link to="/signin" style={{textTransform:"capitalize"}}>New User</Link></li>
                           <li><Link to="/feature" style={{textTransform:"capitalize"}}>Old User</Link></li>
                        </ul>
                     </li>
                   <li>
                      <a href="#" style={{textTransform:"capitalize"}}>Books
                      <i className="fas fa-caret-right"></i>
                      </a>
                      <ul>
                         <li><Link to="/feature" style={{textTransform:"capitalize"}}>Adventure</Link></li>
                         <li><Link to="/feature" style={{textTransform:"capitalize"}}>Novels</Link></li>
                         <li><Link to="/feature" style={{textTransform:"capitalize"}}>Historical</Link></li>
                         <li><Link to="/feature" style={{textTransform:"capitalize"}}>Thriller</Link></li>
                         <li><Link to="/feature" style={{textTransform:"capitalize"}}>Literature</Link></li>
                        
                      </ul>
                   </li>
                </ul>
             </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/login">Logout</Link></li>
        </ul>
    </nav>            
        </div>
    )

}