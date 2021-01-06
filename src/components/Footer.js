import React from 'react';
//redux
import {useSelector} from 'react-redux';
//end of redux


const Footer = () => {
// redux
    const counter = useSelector(state => state.counter);

//end of redux


    return (
        <div style ={{border: '1px solid white', margin: "1em"}}>
            <p style={{color: "white", padding: "1em", display: "flex", justifyContent: "space-around"}}>
                <a href='https://github.com/tillyninjaspace' target="_blank">Developer Details: Tilly Wright</a>
                <span style={{marginLeft: "10px"}}>Utilized Jikan API, Node, Express, Cors, Nodemailer, dotenv and React libraries</span></p>

                {/* test REDUX */}
               <p>Counter test: {counter}</p>

                {/* end of test REDUX */}
        </div>
    )
};

export default Footer;

//Goals: Add pagination and contact us form