const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        mobile: {
            type: String,
            required: true,
            trim: true
        },
        // password: {
        //     type: String,
        //     required: true,
        //     minlength: 6,
        // },
        // isVerified: {
        //     type: Boolean,
        //     default: false,
        // },
    //     role: {
    //         type: String,
    //         enum: ["user", "Admin"],
    //         default: "user"
    //     },
    //     gender: {
    //         type: String,
    //         enum: ["male", "female", "other"]
    //     },
    //     age: {
    //         type: Number,
    //         min: 0
    //     },
    },
    // { timestamps: true }
);
const User = mongoose.model("User", userSchema)
module.exports = User;