const Restaurant = require("../models/Restaurant");

// exports.createRestaurant = async (req, res) => {
//     try {
//         const {
//             name,
//             images,
//             description,
//             location,
//             rating,
//             type,
//             category,
//             deliveryTime,
//             deliveryCharge,
//             distance,
//             timing,
//             offers,
//             isPureVeg,
//             isOpen,
//             popularDishesh,
//             ratingCount,
//             featured,
//             tags
//         } = req.body;

//         const restaurant = new Restaurant({
//             name,
//             images,
//             description,
//             location,
//             rating,
//             type,
//             category,
//             deliveryTime,
//             deliveryCharge,
//             distance,
//             timing,
//             offers,
//             isPureVeg,
//             isOpen,
//             popularDishesh,
//             ratingCount,
//             featured,
//             tags
//         });


//     } catch (error) {
        
//     }
// }

exports.createRestaurant = async (req, res) => {
    try {
        let images = [];
        if (req.files && req.files.length > 0) {
            images = req.files.map(file => file.path);
        }


        // let popularDishes = [];
        // if (req.body.popularDishes) {
        //     if (typeof req.body.popularDishesh === 'string') {
        //     popularDishes = req.body.popularDishes.split(',').map(id => mongoose.Types.ObjectId(id))
        //     } else if (Array.isArray(req.body.popularDishes)) {
        //         popularDishes = req.body.popularDishes.map(id => mongoose.Types.ObjectId(id));
        // }
        // }
        

        const restaurant = new Restaurant({
            name: req.body.name,
            images: images,
            description: req.body.description || '',
            location: {
                area: req.body.area,
                city: req.body.city,
                pincode: req.body.pincode,
                address: req.body.address
            },
            rating: parseFloat(req.body.rating) || 0,
            type: req.body.type,
            category: req.body.category ? req.body.category.split(',') : [],
            deliveryTime: {
                min: parseInt(req.body.deliveryMin),
                max: parseInt(req.body.deliveryMax)
            },
            deliveryCharge: parseFloat(req.body.deliveryCharge),
            distance: parseFloat(req.body.distance),
            timing: {
                open: req.body.openTime,
                close: req.body.closeTime,
            },
            offers: req.body.offers ? req.body.offers.split(',') : [],
            isPureVeg: req.body.isPureVeg === 'true',
            isOpen: req.body.isOpen === 'true',
            // popularDishes,
            ratingCount: parseInt(req.body.ratingCount) || 0,
            featured: req.body.featured === 'true',
            tags: req.body.tags ? req.body.tags.split(',') : []
        });


        await restaurant.save();
        return res.status(201).json({
            success: true, message: 'Restaurant created successfully',
            restaurant
        });


    } catch (error) {
        console.error('Error creating restaurant:', error);
        return res.status(500).json({
            message: 'Server error',
            error: error.message,
            success: false
        });
    }
};