const mongoose = require("mongoose");
var schema = mongoose.Schema;

var genreSchema = new schema({
    genureLink:{type:String},
    genureName:{type:String},
    genureDesc:{type:String},
    genureImage:{type:String}
})
module.exports=mongoose.model("genure",genreSchema)