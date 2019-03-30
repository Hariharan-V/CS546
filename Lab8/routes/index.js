
const search = require("./search");
const details = require("./details");
const path = require("path");
const index = app=>{
	app.get("/",(req,res)=>{
		res.sendFile(path.resolve("static/home.html"));
	});
	app.use("/search",search);
	app.use("/details",details);
	
	app.use("*",(req,res)=>{
		 res.sendStatus(404);
	});

}
module.exports = index;
