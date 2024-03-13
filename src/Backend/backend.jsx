const dotenv = require('dotenv');
const result = dotenv.config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user:process.env.REACT_APP_Admin_Gmail,
    pass:process.env.REACT_APP_Password
  }
});

app.post('/send', upload.single('file'), (req, res) => {
  const { name,contact, email,qualification, message } = req.body;
  const file = req.file; // Access uploaded file

  // Email you send to yourself
  const mailOptions = {
    from: email,
    to: process.env.REACT_APP_Admin_Gmail, // Or any other recipient
    subject: 'New Form Submission',
    text: `Name: ${name}\n contact: ${contact}\nEmail: ${email}\n Qualification: ${qualification} \nMessage: ${message}`,
    attachments: [
      {
        filename: file.originalname,
        path: file.path // Use the file path from multer
      }
    ]
  };
  
const confirmationMail = {
  from: process.env.REACT_APP_Admin_Gmail,
  to: email,
  subject: 'Thank you for your submission',
  text: 'Thank you for submitting the form. We will be in touch soon!'
};


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
        transporter.sendMail(confirmationMail, (error, info) => {
            if (error) {
              console.log(error);
              res.status(500).send('Error sending confirmation email');
            } else {
              res.status(200).send('Email sent successfully');
            }
          });
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
