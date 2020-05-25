var mongoose = require('mongoose')
var bannerSchema = mongoose.Schema({
    "pic": String,
    "title": String,
    "msg": String,
    "link": String
});
// studentSchema.index({ "sid": 1 });
var Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner