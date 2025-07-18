const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params: {
        folder: 'myproject',
        allowed_formats:['jpg','png','jpeg','webp'],
    },
})
const parser = multer({ storage });
module.exports = parser;