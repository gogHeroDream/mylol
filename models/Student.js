var mongoose=require('mongoose')
var studentSchema = mongoose.Schema({
    "sid": Number,
    "name":String,
    "age": Number,
    "sex": String,
    "pic": String
});
studentSchema.index({"sid": 1});
var Student = mongoose.model("Student", studentSchema);

module.exports = Student