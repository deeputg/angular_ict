const mongoose = require("mongoose");
var schema = mongoose.Schema;

var songSchema = new schema({
    songLink:{type:String},
    songName:{type:String},
    songAlbum:{type:String},
    songArtist:{type:String},
    songDesc:{type:String},
    songGenure:{type:String},
    genureId:{type:schema.Types.ObjectId,ref:"genure"},
    songImage:{type:String},
    songYoutubeLink:{type:String}
})
module.exports=mongoose.model("song",songSchema)