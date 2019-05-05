const express = require("express");
const router = express.Router();
const path = require("path");
const users = require("./users.js");
const bcrypt = require("bcrypt");
const login = require("./login.js");
const logout = require("./logout.js");
const private = require("./private.js");
function validate_user(req,res,next){
		if(req.session.user){
			next();
			return;
		}else{
			res.status(403).send("You are not logged in");
		}
	}
	
	router.use(validate_user);
	router.get("/",(req,res)=>{
		let obj = null;
		for(let i = 0; i<users.length; i++){
			if(users[i].username==req.session.user){
				obj = users[i];
			}
		}
		res.render("posts/profile",{person:obj});
		
	});

	router.get("*",(req,res)=>{
		res.status(404).send("Page not Found");
	});





module.exports = router;