const express = require('express');
const router = express.Router();
const parser = require('../config/multer');
const restaurantController = require('../controllers/restaurantController');

router.post('/', parser.array('images', 5), restaurantController.createRestaurant);

module.exports = router;