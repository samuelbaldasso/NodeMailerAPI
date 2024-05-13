const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/api/email", (req, res) => {
  const { email, subject, message } = req.body;

  console.log(req.body);

  if (!req.body.message || !req.body.email || !req.body.subject) {
    return res.status(400).send({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtps://smtp.gmail.com", // Você pode alterar o host se desejar
    port: 465, // Ou sem definição de porta
    secure: true, // Ou false
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECIPIENT,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: "Error sending email" });
    }
    res.send({ message: "Email sent successfully" });
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
