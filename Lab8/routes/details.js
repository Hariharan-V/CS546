const express = require("express");
const router = express.Router();
const people = require("../data/").people

router.get("/:id",async(req,res)=>{
	let person = {};
	try{
		 person= await people.getPersonById(parseInt(req.params.id));
	} catch(e){
		let error = {
			message: "Person with ID "+req.params.id+" does not exist"
		}
		res.status(400).render("posts/error",{title:"400 Error",error:error});
		return;
	}
	res.render("posts/details",{title: "Person Found",person:person,name:person.firstName+ " "+person.lastName});

});

module.exports = router;