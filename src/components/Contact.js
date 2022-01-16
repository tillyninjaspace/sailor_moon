import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ status, setStatus ] = useState('Send')

    //Testing for REDUX
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus("Sending...Please wait up to 30 seconds.");
        console.log("Contact Form is starting to send.")
        //IMPORTANT KEEP Original for HEROKU DEPLOYMENT
        // let response = await fetch('/api/send', {
        //END IMPORTANT KEEP
        //GODADDY & AMPLIFY DEPLOY SWTICH contact us form only use this for GODADDY Hosting ACCOUNT & AMPLIFY ONLY!
        let response = await fetch('https://sailormoon-prettyscouts.herokuapp.com/api/send', {
        //end of GODADDY DEPLOY SWITCH

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
            <input required placeholder='Your Name' value={name} onChange={(event) => setName(event.target.value)}/>
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
        <>
        <div>
            <h2>Contact Us</h2>
            <ContactForm />
        </div>
        <div style={{textAlign: "center"}}>
            <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B08CBQJ2K9&asins=B08CBQJ2K9&linkId=ae54a4330f344f236fd05b95ea0810da&show_border=true&link_opens_in_new_window=true"></iframe>
            <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B08L9RQ7FW&asins=B08L9RQ7FW&linkId=2dfdf6c48d610de18681125cb49e9309&show_border=true&link_opens_in_new_window=true"></iframe>
            <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B093VJ3JXQ&asins=B093VJ3JXQ&linkId=396b15df06ec9ff5fa012e9d2d538847&show_border=true&link_opens_in_new_window=true"></iframe>
            <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B09G69F68M&asins=B09G69F68M&linkId=27d14c1e9a4ac82307c15b0f08fbeff6&show_border=true&link_opens_in_new_window=true"></iframe>
        </div>
        </>
    )
};

export default Contact;