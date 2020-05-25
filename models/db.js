var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wzry', {
    useNewUrlParser: true,
    useUnifiedTopology: true     //这个即是报的警告
})
var db= mongoose.connection;
db.once('once', function(callback){
    console.log('数据库成功被打开');
});
module.exports = db;