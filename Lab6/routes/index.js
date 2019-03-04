const story = require("./story");
const education = require("./education");
const about = require("./about");

const index = app=>{
	app.use("/story",story);
	app.use("/education",education);
	app.use("/about",about);
	app.use("*",(req,res)=>{
		res.status(404).json({ error: "Not found" });
	});

}
module.exports = index;
