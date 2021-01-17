import React from 'react';
import {NavLink} from 'react-router-dom';
//redux
import {useSelector} from 'react-redux';
//end of redux


const Footer = () => {
// redux
    const counter = useSelector(state => state.counter);

//end of redux


    return (
        <div style ={{border: '1px solid white', margin: "1em"}}>
            <p style={{color: "white", padding: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                {/* <a href='https://github.com/tillyninjaspace' target="_blank">Developer Details</a> */}
                <NavLink to="/contact" style={{textDecoration: "none", color: "white"}}>Developer: Tilly Wright (Contact Developer) </NavLink>
                <span style={{marginLeft: "10px"}}>Tech Stack: Utilized Jikan API, Node, Express, Cors, Redux, Nodemailer, dotenv, CSS and HTML; logo created by developer using: <a href="https://partner.canva.com/c/2099558/653599/10068" target="_blank">Canva</a> with the intent to replicate Sailor Moon's bow</span></p>
                {/* <h3 id="653599"><a href="https://partner.canva.com/c/2099558/653599/10068">Canva Logo Maker Tool</a></h3> */}
                {/* <img height="0" width="0" src="https://imp.pxf.io/i/2099558/653599/10068"/> */}

                {/* test REDUX */}
               {/* <p>Counter test: {counter}</p> */}

                {/* end of test REDUX */}
        </div>
    )
};

export default Footer;

//Goals: Add pagination and contact us form