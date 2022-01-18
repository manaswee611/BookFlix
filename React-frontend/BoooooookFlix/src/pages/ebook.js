import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';

export default function Ebook() {
    return (
        
     <React.Fragment>
         <Nav/>
               <div style="width: 100%; height: 660px;">
            <embed  style=" width: 90%; height: 100%;"src="./../assets/pdfs/common-sense.pdf"></embed>
        </div>

     </React.Fragment>
    );
}