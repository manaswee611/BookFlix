import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router ,Route ,Routes,Link} from 'react-router-dom';
import ListUserComponent from './Components/ListUserComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { CreateBookComponent } from './Components/CreateBookComponent';
import { BookComponent } from './Components/BookComponent';
import {UpdateBookComponent} from './Components/UpdateBookComponent';
import RouterPage from './pages/RouterPage';



function App() {
  return (
    
    
      <BrowserRouter>
            {/* <HeaderComponent/> */}
            {/* <Link to="/">Home</Link>
            <Link to="/user"> User details</Link> */}
            <div className="App">
                            {/* <Demo/>  */}
                            <RouterPage/>
                    </div>
               
               <Routes>
                 
                   <Route exact path ="/" element ={<ListUserComponent/>}/>
                   <Route path ="/user" element = {<ListUserComponent/>}/>
                   <Route path ="/Books" element = {<BookComponent/>}/>
                   <Route path ="/addBooks" element = {<CreateBookComponent/>}/>
                   <Route path ="/updateBook/:id" element = {<UpdateBookComponent/>}/>
                   
                 </Routes>
            
           <FooterComponent /> 
      </BrowserRouter>
    
  );
}


export default App
