const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const otpController = require("../controllers/otpController");
const emailController = require("../controllers/emailController");

router.post("/register", userController.createUser)
router.post("/Login", userController.login)  
router.post("/send-otp", otpController.sendotp)
router.post("/send-email",emailController.sendEmail)

module.exports = router; 

