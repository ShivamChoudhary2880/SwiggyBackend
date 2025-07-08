const emailService = require('../services/emailService');

exports.sendEmail = async (req, res) => {
    try {
        const { useremail } = req.body;

        if (!useremail) {
            return res.status(400).json({ message: "Email is required" });
        }
        const subject = "Welcome to Our Service";
        const text = "Thank you for signing up!";
        const OTP = Math.floor(100000 + Math.random() * 900000).toString();
        const html = OTP
        await emailService.sendEmail({
            to: useremail,
            subject,
            text,
            html
        });
        res.status(200).json({
            message: "Email sent successfully",
            OTP : OTP
         });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}