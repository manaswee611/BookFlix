import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';

export default function Adminlogin() {
    return (
        
     <React.Fragment>
        <div class="login">
            <div class="form-box">
                {/* <div class="button-box">
                    <div id="btn"></div>
                    <button type="button" class="toggle-btn" onclick="login()">Log In</button>
                    <button type="button" class="toggle-btn" onclick="register()">Sign Up</button>
                </div> */}
                <p style={{color:"black",marginTop:"20px",fontSize:"30px"}}>Admin LogIn</p>
                <div class="social-icons">
                     {/* <a href ="https:www.facebook.com"><img src="./../images/facebook.png"/></a>
                    <i class= "fab fa-faceSbook"></i>
                     
                     
                     <a href="https://www.instagram.com"><img src="./../images/instagram.png"/>
                        <i class= "fab fa-instagram"></i>
                         </a>
                         <a href="https://www.twitter.com"><img src="./../images/twitter.png"/>
                            <i class= "fab fa-twitter"></i>
                             </a>    */}
                </div>
                <form id="login" className="input-group" action="/home">
                    <input type="text" className="input-field" placeholder="User Id" required/>
                    <input type="password" className="input-field" placeholder="Enter Password" required/>
                    {/* <input type="checkbox" className="chech-box"/><span>Remember Password</span> */}
                    <Link to="/"><button type='submit' className='submit-btn' style={{marginLeft:"80px"}}>submit</button></Link>
                    {/* <input type="submit" className="submit-btn" value="Log in"/> */}
                   
                 </form>
                {/* <form id="register" class="input-group">
                    <input type="text" class="input-field" placeholder="User Id" required/>
                    <input type="email" class="input-field" placeholder="Email Id" required/>
                    <input type="text" class="input-field" placeholder="Enter Password" required/>
                    <input type="checkbox" class="chech-box"/><span>I agree to the terms & conditions.</span>
                    <button type="submit" class="submit-btn">Register</button>
                </form> */}
            </div>
        </div>
        


     </React.Fragment>
    );
        }