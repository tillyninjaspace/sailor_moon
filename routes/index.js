const apiRouter = require('express').Router()
const nodemailer = require('nodemailer')

apiRouter.get('/sailormoon', (req,res, next) => {
    res.send({message: 'Prism Power!'})
});


//new
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
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
      if (error) {
        res.json({ status: "ERROR. Message not sent." });
      } else {
        res.json({ status: "Message Sent." });
      }
    });
});

//end of new

module.exports = apiRouter


// Test this on browswer to work: http://localhost:4000/api/sailormoon