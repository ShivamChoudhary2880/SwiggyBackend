const { json } = require('body-parser');
const Profile = require('../models/profile');
const { parse } = require('path');

exports.createProfile = async (req, res) => {
    try {
        const { userId, bio, skills, experience } = req.body;
        const profilePhoto = req.file ? req.file.filename : null;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        let parsedExperience = [];
        try {
            parsedExperience = experience ? JSON.parse(experience) : [];
        } catch (error) {
            return res.status(400).json({ message: "Invalid experience format", error: error.message });
        }




        const profile = new Profile({
            user: userId,
            bio,
            skills: skills?.split(",").map(skill => skill.trim()),
            experience: experience ? JSON.parse(experience) : [], 
            profilePhoto
        })
        await profile.save();
        res.status(201).json({
            message: "Profile created successfully",
            profile
         })

    } catch (error) {
        res.status(500).json({message:"internal server error", error : error.message})
    }
}