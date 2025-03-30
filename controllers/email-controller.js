const nodemailer = require('nodemailer');

class EmailController {
  async sendEmail(req, res) {
    const { email, subject, message } = req.body;

    if (!message || !email || !subject) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtps://smtp.gmail.com",
      port: 465,
      secure: true,
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

    try {
      await transporter.sendMail(mailOptions);
      res.send({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).send({ message: "Error sending email" });
    }
  }
}

module.exports = new EmailController();