const express = require("express");
const router = express.Router();
const path = require("path");
const users = require("./users.js");
const bcrypt = require("bcrypt");
const login = require("./login.js");
const logout = require("./logout.js");
const private = require("./private.js");

router.get("/",(req,res)=>{
		if(req.session.user){
			req.session.destroy();
			res.sendFile(path.resolve("static/logout.html"));
		}else{
			res.redirect("/")
		}
	});
router.get("*",(req,res)=>{
		res.status(404).send("Page not Found");;
	});


module.exports = router;