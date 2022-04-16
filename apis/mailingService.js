const mailer = require("nodemailer");
const {Error} = require("mongoose");
const path = require("path");

var mailData = require('./mailData.js');

var keys = require("./keys.json");
const { exit } = require("process");


// Taking the authentication details
var transport = mailer.createTransport({
  service: 'gmail',
  auth: {
      user: keys.mail.userid,
      pass: keys.mail.pass
  }
});


// Major function which has contents and sends the mail.
var CultRangMailer = (comp, mailID) => {
    console.log(comp);
    // console.log(mailData[comp]);
    // if(mailData.comp){
    //     console.log("The Competition is there!!");
    // }else{
    //     console.log("Not Found!!");
    // }
  var mailOptions = {
      from: keys.mail.userid,
      to: mailID,
      subject: "Hi this is the test email",
      html: "<h1> Hi! </h1>",
  }

  transport.sendMail(mailOptions, (err, result) => {
      if(err) {
          console.error(err);
      }else {
          console.log(result.response);
      }
  })
};


// If any Error then just comment out this.
// var mailerfunction = async (comp, mailID) => {
//     CultRangMailer(mailID, mailData[comp]);
// }

module.exports = CultRangMailer;
