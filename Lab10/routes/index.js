
const path = require("path");
const users = require("./users.js");
const bcrypt = require("bcrypt");
const login = require("./login.js");
const logout = require("./logout.js");
const private = require("./private.js");
const index = app=>{
	function logging (req,res,next){
		let usr = null;
		if(req.session.user){
			usr = "(Authenticated User)";
		}else{
			usr = "(Non-Authenticated User)";
		}
		
		console.log("["+(new Date().toUTCString())+"] "+ req.method+" "+req.originalUrl+" "+usr);
		next();
	}
	app.use(logging);
	app.get("/",(req,res)=>{	
		if(req.session.user){
			
			res.redirect("/private");
			return;
		}
		res.sendFile(path.resolve("static/login.html"));
	});

	app.use('/login',login);
	app.use('/logout',logout);
	app.use("/private",private);
	app.get("*",(req,res)=>{
		res.status(404).send("Page not Found");;
	});
	

}


module.exports = index;