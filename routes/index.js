const apiRouter = require('express').Router()
const nodemailer = require('nodemailer')

apiRouter.get('/sailormoon', (req,res, next) => {
    res.send({message: 'Prism Power!'})
});

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const contactEmail = nodemailer.createTransport({

  //temporarily testing this for just deployment reasons
    service: 'Godaddy',
    host: "smtpout.secureserver.net",  
    secure: false,
    port: 465,


  //end deploy test  


//Working for gmail but need CAPTCHA link
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false,
//Done Working    
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
});
  
contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("ready for message to send...");
    }
});

apiRouter.post("/send", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: EMAIL,
      subject: "Contact Form Submission via Sailor Moon website",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
  //Added on April 15, 2021    
      console.log("What is mail:", mail)
      if (error) {
//Added on APril 15, 2021
        console.log("What is error", error)
        res.json({ status: "ERROR. Message not sent." });
      } else {
        res.json({ status: "Message Sent." });
        //added on Jan 18
        console.log("Message successfully sent")
        //end Jan 18
      }
    });
});

module.exports = apiRouter