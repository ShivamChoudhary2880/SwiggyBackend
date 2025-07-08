const sgMail = require("../config/sendgrid");
const sendEmail = async ({ to, subject, text, html }) => {
    const msg = {
        to,
        from: process.env.SENDER_EMAIL,
        subject,
        text,
        html,
    };
    return sgMail.send(msg);
};
module.exports = {sendEmail}
