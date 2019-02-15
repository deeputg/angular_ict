var express =require("express");
var mongoose = require("mongoose")
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var bookModel = require("./model/book")

const dburl = "mongodb://127.0.0.1:27017/mymongodb";
mongoose.connect(dburl,function(err){
    if(err)
    console.log("Database connection error"+err)
})

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200/")
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    next();
})
app.get("/data",function(req,res){
    res.send({"msg":"Success"})
})
app.get("/dbconnect",function(req,res){
    bookModel.find({},function(err,result){
        res.send(result);
    })
})

app.post("/dbinsert",function(req,res){
    var insertData = {
        bookId:req.body.book.bookId,
        bookName:req.body.book.bookName,
        author:req.body.book.author,
        publisher:req.body.book.publisher
    }
    console.log(req.body.book);

    bookModel.insertMany(insertData,function(err){
        if(err)
        res.send({"msg":"error"+err});
        else
        res.send({"msg":"Success"});
    })
})

app.listen(8000,function(){
    console.log("server started")
})