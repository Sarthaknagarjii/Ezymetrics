const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    auth: {
      user: "youremail@example.com", // Your email address
      pass: "yourpassword", // Your email password
    },
  });

  const mailOptions = {
    from: "youremail@example.com", // Same as the user email
    to, // Recipient's email address
    subject, // Email subject
    text, // Email body text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} with subject: ${subject}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendEmail };
