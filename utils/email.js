const sgMail = require("@sendgrid/mail");
const pug = require("pug");
const { htmlToText } = require("html-to-text");

async function sendEmail(user, resetCode) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const subject = "Your password reset code (Valid for only 10 minutes)";
  const html = pug.renderFile(`${__dirname}/../views/email/passwordReset.pug`, {
    firstname: user.firstname,
    code: resetCode,
    subject,
  });
  const msg = {
    to: user.email,
    from: process.env.EMAIL_FROM,
    subject,
    text: htmlToText(html),
    html: html,
  };

  return await sgMail.send(msg);
}

module.exports = sendEmail;
