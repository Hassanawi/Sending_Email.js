const http = require("http");  

var nodemailer = require("nodemailer"); // install npm nodemailer

const port = 3000;
const hostname = "127.0.0.8";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hass4nkh4n09@gmail.com",
    pass: "fmvoovufukxwiigp", //have to allow gmail to send email through other app
  },
});

var mailOptions = {
  from: "hass4nkh4n09@gmail.com",
  to: "hassan.sarfraz030@gmail.com",
  subject: "Sending Email using Node.js",
  text: `Hi 
  its hassan. this email is sent to you thought Programming means by using node js`,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
