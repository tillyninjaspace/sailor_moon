const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer')

const server = express();
require('dotenv').config();

server.use(cors());
server.use(express.json());
server.use("/", router);

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

router.post("/send", (req, res) => {
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

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`server is running on ${PORT} ...`))