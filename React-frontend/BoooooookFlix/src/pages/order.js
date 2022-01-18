import React from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav';

export default function Order() {
    function myFunction() {
        alert("Thank you for the Order!");
      }
    return (
        
     <React.Fragment>
         <Nav/>
         <div className='order'>
             <br/> <br/> <br/> <br/>
        <div className="wrapper">
        <h2>Order Confirm Form</h2>
        <form action="" method="POST">
          
            <div className="input_group">
            
            <div className="input_box">
            
                <input type="text" placeholder="Full Name" required className="name"/>
                <i className="fa fa-user icon "></i>
                

                
            </div>
            </div>
            <div className="input_group">
                <div className="input_box">
                    <input type="number" placeholder="Phone Number" required className="name"/>
                    <i className="fa fa-phone icon "></i>
                </div>
                </div> 
                <div className="input_group">
                <div className="input_box">
                    <input type="number" placeholder="Building No" required className="name"/>
                    <i className="fa fa-home icon"></i>
                </div>
                </div> 
                <div className="input_group">
                    <div className="input_box">
                        <input type="text" placeholder="Street-Name" required className="name"/>
                        <i className="fa fa-map-marker icon" arial-hidden="true"></i>
                    </div>
                    </div> 
                   <div className="input_group">
                        <div className="input_box">
                            <input type="text" placeholder="City" required className="name"/>
                            <i className="fa fa-institution icon"></i>
                        </div>
                        </div>
                        <div className="input_group">
                            <div className="input_box">
                                <input type="number" placeholder="Pin Code" required className="name"/>
                                <i className="fa fa-postalcode icon"></i>
                            </div>
                        </div>
                       <div className="input_group">
                           <div className="input_box">
                            <input type="text" placeholder="State" required className="name"/>
                            <i className="fa fa-world-map icon"></i>
                           </div>
                         </div>
                         <div className="input_group">
                            <div className="input_box">
                                <button onClick={(e)=>myFunction(e)}><Link to="/home">Submit</Link></button>
                                </div>
                                </div>
                        </form>
                    
        </div>
        </div> 
        

     </React.Fragment>
    );
}