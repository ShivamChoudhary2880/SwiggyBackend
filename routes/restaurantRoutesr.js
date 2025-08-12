const express = require('express');
const router = express.Router();
const parser = require('../config/multer');
const restaurantController = require('../controllers/restaurantController');

router.post('/create', parser.array('images', 5), restaurantController.createRestaurant);
router.put('/update/:id', parser.array('images', 5), restaurantController.updateRestaurant);
router.get('/getAll', restaurantController.getAllRestaurant);
router.delete('/delete/:id', restaurantController.deleteRestaurant);

module.exports = router;