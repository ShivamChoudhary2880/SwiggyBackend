const express = require("express");
const router = express.Router();
const upload = require("../config/upload");
const profileController = require("../controllers/profileController");

router.post("/create", upload.single("profilePhoto"), profileController.createProfile);

module.exports = router;