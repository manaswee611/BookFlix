import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';

export default function Feedback() {
    function myFunction() {
        alert("Thank you for the Feedback!");
      }
    return (
        
     <React.Fragment>
       <Nav/>
        <div className='feedback'>
        <h1>Feedback Form</h1>
        <center>
    
            <div class ="container1">
            <form>
                <h1>Give your Feedback</h1>
                <div class="id">
                    <input type="text" placeholder="Full Name"required/>
                    <i class="far fa-user"></i>
                  </div>
                  <div class="id">
                     <input type="email" placeholder="Email address" required/>
                     <i class="far fa-envelope"></i>
                   </div>
                   <textarea cols="15" rows="5" placeholder="Enter your opinion"required></textarea>
                   <button onClick={(e)=>myFunction(e)}><Link to="/home">Submit</Link></button>

            </form> 
            </div>
        </center>    
        </div> 


     </React.Fragment>
    );
}