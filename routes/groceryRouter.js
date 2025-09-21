const express = require("express");
const router = express.Router();
const parser = require('../config/multer')
const groceryController = require('../controllers/groceryController');

router.post("/", parser.single('image'), groceryController.createGrocery);
router.get("/getAll", groceryController.getAllGrocery)
router.put("/update/:id", parser.single('image'), groceryController.updateGrocery)
router.delete("/delete", groceryController.deleteGrocery)


module.exports = router;
