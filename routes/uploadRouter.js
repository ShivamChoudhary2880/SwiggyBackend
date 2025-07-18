const express = require('express');
const router = express.Router();
const parser = require('../config/multer');

router.post('/upload-single', parser.single('image'), (req, res) => {
    res.json({
        imageUrl: req.file.path,
        publicId: req.file.filename,
    });
});

router.post('/upload-multiple', parser.array('images', 5), (req, res) => {
    const uploadImages = req.files.map(file => ({
        imageUrl: file.path,
        publicId: file.filename,
    }));
    res.json(uploadImages);
});

module.exports = router;