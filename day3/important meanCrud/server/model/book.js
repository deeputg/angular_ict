const mongoose = require("mongoose");
var schema = mongoose.Schema;

var bookSchema = new schema({
    "bookId" :{type:String},
    "bookName" :{type:String},
    "author" :{type:String},
    "publisher" :{type:String}
})
module.exports=mongoose.model("book",bookSchema)