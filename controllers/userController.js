const User = require("../models/User"); 
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async (req, res) => {
    try {
        const {
            username,
            email,
            mobile,
            password,
            isVerified,
            // role,
            // gender,
            // age
        } = req.body;

        const newUser = new User({
            username,
            email,
            mobile,
            password,
            isVerified,
            // role,
            // gender,
            // age,
        });

        const savedUser = await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            data: savedUser,
        })
    } catch (error) {
        res.status(400).json({ message: "Failed to create user", error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        if (!mobile && !password) {
            return res.status(400).json({message:"mobile and password are empty"})
        }
        const existuser = await User.findOne({ mobile })
        if (!existuser) {
            res.json({
                message: "user not found",
                status:"failed"
            })
        }
        const token = jwt.sign(
            {
                id: existuser._id,
                email: existuser.email,
                role: existuser.role
            },
            process.env.SECRET_KEY,
                {expiresIn:"2h"}
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 2 * 60 * 60 * 1000
        });

        if (existuser.password == password) {
            res.json({
                message: "user login successfully",
                status: "success",
                token, 
                data: {
                    username: existuser.username,
                    email: existuser.email,
                    role: existuser.role,
                    mobile:existuser.mobile
                }
            })
        }
    } 
    catch (error) {// login 7:37 jun 21 
        res.status(500).json({message:"server error", error: error.message})
    }
}

