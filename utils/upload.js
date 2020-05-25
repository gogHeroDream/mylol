var multer = require('multer');
const path = require('path');

function getExtension(extname) {
    return path.extname(extname)
}
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ '-' + file.originalname)
    }
})
var upload = multer({ storage: storage })
module.exports = upload