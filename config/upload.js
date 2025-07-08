const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'uploads/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const newName = Date.now() + ext
        cb(null, newName)
    }
})
const upload = multer({ storage });
module.exports = upload;