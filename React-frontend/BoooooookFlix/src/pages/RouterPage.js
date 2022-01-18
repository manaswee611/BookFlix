import React from 'react'
import {BrowserRouter, BrowserRouter as Router ,Route ,Routes,Link} from 'react-router-dom';
import Home from './Home'
import About from './about'
import Feedback from './feedback'
import Feature from './feature'
import Login from './login'
import Adminlogin from './adminlogin'
import Order from './order'
import Signin from './signin'
import Ebook from './ebook'
import Nav from './Nav';

export default function RouterPage() {
    return (
        <div>
            {/* <Router> */}
            {/* <Nav/> */}
                <Routes>
                     <Route path="/home" exact element={<Home/>}/>
                     <Route path="/about" exact element={<About/>}/>
                     <Route path="/feature" exact element={<Feature/>}/>
                     <Route path="/feedback" exact element={<Feedback/>}/>
                     <Route path="/login" exact element={<Login/>}/>
                     <Route path="/adminlogin" exact element={<Adminlogin/>}/>
                     <Route path="/order" exact element={<Order/>}/>
                     <Route path="/signin" exact element={<Signin/>}/>
                     <Route path="/ebook" exact element={<Ebook/>}/>
                </Routes>
            {/* </Router> */}
        </div>
    )
}


