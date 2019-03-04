const express = require("express");
const router = express.Router();
const data = require("../data").education;

router.get("/",async(req,res)=>{
	try{
		res.json(data);
	}catch(e){
		res.status(500).send();
	}
});

router.get("*",async(req,res)=>{
	
		res.status(404).send();
	
});
module.exports = router;