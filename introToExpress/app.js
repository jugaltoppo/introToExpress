var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.get("/youfellinlovewith/:thing",function(req,res){
	var thing=req.params.thing;
	res.render("love",{thing:thing});
});

app.get("/posts",function(req,res){
	var post=[{
		title:"Dota", author:"jugal"
		},
		{
		title:"CS GO", author:"sekhar"
		},	
		{
		title:"Apex Legends", author:"toppo"
		}];
	res.render("posts",{posts : post});
});

app.listen(3000,function(){
	console.log("listening to port 3000");
});
