const express = require('express');
const router = express.Router();
const parser = require('../config/multer')
const dishController = require('../controllers/dishController');

router.post("/", parser.single('image'), dishController.createDish);
router.get("/getAll", dishController.getAllDish);
router.put("/update/:id", parser.single('image'), dishController.updateDish);
router.post("/delete", dishController.deleteDish);



module.exports = router;