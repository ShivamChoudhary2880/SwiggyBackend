const client = require("../config/twilio");

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOTP(phoneNumber) {
    const otp = generateOtp();

    const message = await client.messages.create({
        body: `Your otp is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber,
    });
    return { sid: message.sid, otp };
}
module.exports = {sendOTP}