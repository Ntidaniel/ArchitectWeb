// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { getContacts } = require('../controllers/contactController');

router.get('/contacts', getContacts);

router.post('/contact/send', async (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS  // Your email password or app-specific password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Sending email to the user who filled the form
    subject: `Message from ${firstname} ${lastname}`,
    text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('email sent');
  }
});

module.exports = router;
