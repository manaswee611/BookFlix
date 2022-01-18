import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';



export default function About() {
    return (

     <React.Fragment>
         <Nav/>
                
        <div class="section"/>
            <div class="container"/>
                <div class="title">
                    <br/><br/>
                    <h1>About Us</h1>
                </div>
                <div class="content">
                    <div class="article">
                        <h3>BOOKFLIX is an online web application which is designed to help the readers.It has the 
                             collections of great books in one place to listen and read .<br/>
                             BOOKFLIX is not limited to online reading only,readers can also purchase books from the website.
                             and accept payments only when reader is satisfied with the purchase.<br/>
                            
                        </h3>
                    </div>
                </div>
                <div class="image-section">
                    <img src="./../assets/images/book3.jfif"/>
                </div>
            </React.Fragment>
        
    );
}
