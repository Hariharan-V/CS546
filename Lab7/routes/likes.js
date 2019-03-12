const express = require("express");
const router = express.Router();
const animals = require("../data").animals;
const posts = require("../data").posts;

router.post("/:animalId",async(req,res)=>{
	try{
		await posts.get(req.query.postId);
		await animals.get(req.params.animalId);
		try{
			await animals.add_like(req.params.animalId,req.query.postId);
		}catch (e){}
		res.status(200).send();
	}catch(e){
		res.status(404).send();
	}
});
router.delete("/:animalId",async(req,res)=>{
	try{
		await posts.get(req.query.postId);
		await animals.get(req.params.animalId);
		try{
			await animals.remove_like(req.params.animalId,req.query.postId);
		}catch(e){}
		res.status(200).send();
	}catch(e){
		res.status(404).send();
	}
});

module.exports = router;