var mongoose = require('mongoose')
var articleSchema = mongoose.Schema({
    "author": String,
    "title": String,
    // type 1 视频 2文档
    "type": Number,
    "body": String,
    "createTime": Date, 
    "pic": String,
    "showTop": Boolean,
    "show": Boolean,
    "remark": [
        {
            author: String,
            backAuthor: String,
            remark: []
        }
    ],
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article