const nodemailer =
require("nodemailer");

require("dotenv").config();



const transporter =
nodemailer.createTransport({

  service: "gmail",

  auth: {

    user:
      process.env.EMAIL_USER,

    pass:
      process.env.EMAIL_PASS,

  },

});



/* SEND EMAIL */
const sendEmail =
async (
  to,
  subject,
  html
) => {

  try {

    await transporter.sendMail({

      from:
        process.env.EMAIL_USER,

      to,

      subject,

      html,

    });



    console.log(
      "Email Sent"
    );

  } catch (error) {

    console.log(error);

  }

};



module.exports =
sendEmail;