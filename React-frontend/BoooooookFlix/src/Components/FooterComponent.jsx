import React, { Component } from 'react';
const stylefooter={
    footer:{
     
         bottom: "0px",
         position: "fixed",
         height: "30px"
     }
     
    }

class FooterComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
   

   
    render() {
        return (
            <div>
                <footer className="footer" style={stylefooter.footer}>
                    All rights reserved 2022 @ <strong>BookFlix</strong>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;