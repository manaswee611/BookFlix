import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./myStyle.css";

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                 {/* <FontAwesomeIcon icon={faUser} /> */}
                <header>
                    <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">BOOKFLIX</div>
                        <Link to="/user">User details</Link>
                        <Link to="/books">Book details</Link>
                        <Link to="/adminlogin">Logout</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;