const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: []
    },
    description: {
        type: String,
        default: ""
    },
    location: {
        area: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
        },
        address: {
            type: String,
            required: true,
        },
    },
    rating: {
        type: Number,
        default: 0,
    },
    type: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        default: [],
    },
    deliveryTime: {
        min: Number,
        max: Number
    },
    deliveryCharge: {
        type: Number,
        default: 0,
    },
    distance: {
        type: Number,
        required: true,
    },
    timing: {
        open: {
            type: String,
            required: true,
        },
        close: {
            type: String,
            required: true,
        }
    },
    offers: {
        type: [String],
        default: []
    },
    isPureVeg: {
        type: Boolean,
        default:false
    },
    isOpen: {
        type: Boolean,
         default:true,
    },
    // popularDishes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'Item'
    // }],
    ratingCount: {
        type: Number,
        default:0
    },
    featured: {
        type: Boolean,
        default:false
    },
    tags: {
        type: [String],
        default:[]
    }
}, { timestamps: true });
module.exports = mongoose.model('Restaurant', restaurantSchema)