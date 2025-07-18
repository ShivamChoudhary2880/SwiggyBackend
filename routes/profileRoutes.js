const express = require("express");
const router = express.Router();
// const upload = require("../config/upload");
const profileController = require("../controllers/profileController");

router.post("/create", profileController.createProfile);

module.exports = router;