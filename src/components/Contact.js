import React, {useState} from 'react';

//new for REDUX
    import {useSelector, useDispatch} from 'react-redux';
    import {increment, decrement} from '../actions'
//end of NEW for REDUX

const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ status, setStatus ] = useState('Send')

    //Testing for REDUX
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch()

    //THUNK
    const sailorMoonProducts = useSelector(state => state.data);
    // console.log("Sailor Moon Products", sailorMoonProducts)
    //end of new for REDUX

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus("Sending...");
console.log("Contact Form is starting to send.")
        //IMPORTANT KEEP Original for HEROKU DEPLOYMENT
        let response = await fetch('/api/send', {
        //END IMPORTANT KEEP
//TESTING contact us form only use this for GODADDY Hosting ACCOUNT ONLY!
        // let response = await fetch('https://sailormoon-prettyscouts.herokuapp.com/api/send', {
//end of TESTING

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, message})
        });
        
        let result = await response.json()
        if (result.status === "Message Sent.") { 
            setName('')
            setEmail('')
            setMessage('')
            setStatus(result.status)
        } else {
            setStatus(result.status)
        }
        console.log("result", result)
    };

    return (
    <div>   
        <form className="contactUsForm" style={{margin: "1em"}} onSubmit={handleSubmit}>
            <label>Name</label>
            <input required placeholder='Your Name' value={name} onChange={(event) => setName(event.target.value)}></input>
            <label>Email Address</label>
            <input type="email" required placeholder='Your Email' value={email} onChange ={(event) => setEmail(event.target.value)}></input>
            <label>Message</label>
            <input required placeholder='Type Message Here' value={message} onChange={(event) => setMessage(event.target.value)}></input>
            <button>{status}</button>
        </form>

        {/* for redux */}
            {/* <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2>Redux Test Section</h2>
            <h2>Counter: {counter}</h2>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            {isLogged ? 
            <h3>Valuable Information if Logged In</h3>
            : '' }
            </div> */}
        {/* end of for redux */}

    </div>   
    )
};

const Contact = () => {

    return (
        <div>
            <h2>Contact Us</h2>
            <ContactForm />
        </div>
    )
};

export default Contact;