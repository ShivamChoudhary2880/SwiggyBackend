const otpService = require("../services/otpService");

exports.sendotp = async (req, res) => {
  try {
    const { mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    const { sid, otp } = await otpService.sendOTP(mobile);

    res.status(200).json({
      message: "OTP sent successfully",
      data: { sid, otp },
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};
