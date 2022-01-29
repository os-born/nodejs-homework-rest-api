const multer = require('multer');
const path = require('path');

const tempPath = path.resolve('temp/');

const multerConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: multerConfig });

module.exports = upload;