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

    //new for REDUX
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch()

    //THUNK
    const sailorMoonProducts = useSelector(state => state.data);
    console.log("Sailor Moon Products", sailorMoonProducts)
    //end of new for REDUX

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("submit", name, email, message)
        setStatus("Sending...");

        let response = await fetch('/api/send', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, message})
        });
        console.log("response of message". response)
        
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
        <form style={{margin: "1em"}} onSubmit={handleSubmit}>
            <label>Name</label>
            <input required placeholder='Your Name' value={name} onChange={(event) => setName(event.target.value)}></input>
            <label>Email Address</label>
            <input type="email" required placeholder='Your Email' value={email} onChange ={(event) => setEmail(event.target.value)}></input>
            <label>Message</label>
            <input required placeholder='Type Message Here' value={message} onChange={(event) => setMessage(event.target.value)}></input>
            <button>{status}</button>
        </form>

        {/* for redux */}
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2>Redux Test Section</h2>
            <h2>Counter: {counter}</h2>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            {isLogged ? 
            <h3>Valuable Information if Logged In</h3>
            : '' }
            </div>
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