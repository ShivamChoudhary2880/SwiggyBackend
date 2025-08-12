const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Grocery',grocerySchema)