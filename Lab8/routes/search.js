const express = require("express");
const router = express.Router();
const people = require("../data/").people

router.post("/",async(req,res)=>{
	if(req.body.personName===undefined || req.body.personName.length==0){
		let error = {
			message: "No input provided"
		}
		res.status(400).render('posts/error',{title:"400 Error",error:error})
		return;
	}
	let peoples= await people.search_name(req.body.personName);
	res.render("posts/search",{title: "People Found",people:peoples,personName:req.body.personName});

});

module.exports = router;