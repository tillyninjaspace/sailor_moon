import React, {useState} from 'react';

//new
// const CONTACT_URL = process.env.CONTACT_URL || 'http://localhost:4000';

//end of new

const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ status, setStatus ] = useState('Send')

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("submit", name, email, message)
        setStatus("Sending...");

        //note to self, localhost cannot be https and it needs to be on localhost for 
        //dev but it doesn't work for deployed heroku
        // let response = await fetch(`http://localhost:4000/api/send`, {
            // let response = await fetch(`${CONTACT_URL}/send`, {
            let response = await fetch('/api/send', {
                //testing above
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