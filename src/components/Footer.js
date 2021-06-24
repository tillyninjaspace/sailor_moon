import React from 'react';
import {NavLink} from 'react-router-dom';
// import {useSelector} from 'react-redux';


const Footer = () => {
// redux test
// const counter = useSelector(state => state.counter);
//end of redux


    return (
        <div style ={{border: '1px solid white', margin: "1em"}}>
            <p style={{color: "white", padding: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <a href='https://github.com/tillyninjaspace' target="_blank">Developer Details</a>
                <NavLink to="/contact" style={{textDecoration: "underline", color: "#FF66C3"}}><span className='contactLink'>Contact Developer</span> </NavLink>
                <span style={{marginLeft: "10px"}}>Tech Stack: Jikan API, React, Node, Express, Cors, Redux, Nodemailer, dotenv, CSS and HTML; logo created by developer using: <a href="https://partner.canva.com/c/2099558/653599/10068" target="_blank">Canva</a></span>

                <span style={{marginLeft: "10px", marginTop: "5px"}}>This app is a participant of Amazon's affiliate program and may earn a small commission for a sale. See <a target="_blank" href="https://www.amazon.com/s?k=sailor+moon&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=fa1c0c45cff49e38ccea1ff155870416&camp=1789&creative=9325">Sailor Moon Merchandise</a> on Amazon.</span>
            </p>
                {/* <p style={{padding: "1em", textAlign: "center"}}>This app is a participant of Amazon's affiliate program and may earn a small commission for a sale. See <a target="_blank" href="https://www.amazon.com/s?k=sailor+moon&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=fa1c0c45cff49e38ccea1ff155870416&camp=1789&creative=9325">Sailor Moon Merchandise</a> on Amazon.</p> */}
                {/* test REDUX */}
                {/* <p>Counter test: {counter}</p> */}
                {/* end of test REDUX */}
        </div>
    )
};

export default Footer;