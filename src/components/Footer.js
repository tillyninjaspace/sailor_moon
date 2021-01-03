import React from 'react';

const Footer = () => {
    return (
        <div style ={{border: '1px solid white', margin: "1em"}}>
            <p style={{color: "white", padding: "1em", display: "flex", justifyContent: "space-around"}}>
                <a href='https://github.com/tillyninjaspace' target="_blank">Developer Details: Tilly Wright</a>
                <span style={{marginLeft: "10px"}}>Utilized Jikan API, Node, Express, Cors, Nodemailer, dotenv and React libraries</span></p>
        </div>
    )
};

export default Footer;

//Goals: Add pagination and contact us form