const express = require("express");
const router = express.Router();
const path = require("path");
const users = require("./users.js");
const bcrypt = require("bcrypt");
const login = require("./login.js");
const logout = require("./logout.js");
const private = require("./private.js");


	router.post("/",(req,res)=>{
		let usr = req.body.username;
		let pass = req.body.password;
		let obj = null;
		for(let i = 0; i<users.length; i++){
			if(users[i].username==usr){
				obj = users[i];
			}
		}
		if(obj==null){
			res.status(401).sendFile(path.resolve("static/login2.html"));
			return;
		}
		
		let valid =  bcrypt.compare(pass,obj.hashedPassword);
		
		if(!valid){
			res.status(401).sendFile(path.resolve("static/login2.html"));
			return;
		}
		// res.cookie("name","AuthCookie");
		req.session.user = usr;

		res.redirect("/private");


	});
	router.get("*",(req,res)=>{
		res.status(404).send("Page not Found");;
	});



module.exports = router;