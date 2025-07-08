const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        maxlength: 500
    },
    skills: {
        type: [String],
        default: []
    },
    experience: [
        {
            title: { type: String, required: true },
            company: { type: String, required: true },
            location: String,
            from: { type: Date, required: true },
            to: { type: Date },
            current: { type: Boolean, default: false },
            description: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Profile", ProfileSchema);