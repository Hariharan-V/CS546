const express = require("express");
const router = express.Router();
const data = require("../data").animals;
const posts = require("../data").posts;
router.get("/",async(req,res)=>{
	try{
		const list = await data.getAll();

		for(let i = 0; i<list.length; i++){
			let likes = list[i].likes;
			for(let j = 0; j<likes.length; j++){
				let POST = await posts.get(likes[j]);
				likes[j] = {
						_id: likes[j],
						title: POST.title
				};
			}
			list[i].likes = likes;
			const post_list = await posts.get_post_list(list[i]._id.toString());
			// console.log(post_list);
			list[i].posts = post_list;
		}

		res.json(list);
	}catch(e){
		res.status(500).send();
		console.log(e);
	}
});
router.get("/:id",async(req,res)=>{

	try{
		const obj = await data.get(req.params.id);
		let likes = obj.likes;
		for(let j = 0; j<likes.length; j++){
				let POST = await posts.get(likes[j]);
				likes[j] = {
						_id: likes[j],
						title: POST.title
				};
		}
		obj.likes = likes;

		obj.posts = await posts.get_post_list(req.params.id);
		// console.log(obj.posts);

		res.status(200).json(obj);
	}catch(e){
		res.status(404).json({error:e});
		// console.log(e);
	}
});
router.post("/",async(req,res)=>{
	const animal = req.body;
	
	if(animal===undefined){
		res.status(400).send();
		return;
	}
		const {name, animalType} = animal;
	if(name===undefined||animalType===undefined){
		res.status(400).send();

	}else{
		try{
			
			const obj = await data.create(name, animalType);
			obj.posts = [];
			
			res.status(200).json(obj);
		}catch(e){
			res.status(404).json({error:e});
			// console.log(e);
		}
	}
});
router.put("/:id",async(req,res)=>{
	const updatedData = req.body;
	if(updatedData===undefined){
		res.status(400).send();
		return;
	}
	const {newName, newType} = updatedData;
	if(newName===undefined&&newType===undefined){
		res.status(400).send();
	}else{
		try{
			await data.get(req.params.id);
			if(newName!==undefined){
				try{
					await data.rename(req.params.id,newName);
				}catch(e){

				}
			}
			if(newType!==undefined){
				try{	
					await data.rename_type(req.params.id,newType);
				}catch(e){
				}
			
			}
			res.status(200).send();
		}catch(e){
			// console.log(e);
			res.status(404).json({error: e})

		}
	}

});
router.delete("/:id",async(req,res)=>{
	try{

		await data.get(req.params.id);
		const reply = await data.remove(req.params.id);
		
		let likes = reply.data.likes;
		for(let j = 0; j<likes.length; j++){
				let POST = await posts.get(likes[j]);
				likes[j] = {
						_id: likes[j],
						title: POST.title
				};
		}
		reply.data.likes = likes;
		const post_list = await posts.remove_authored_posts(req.params.id);
		for(let i = 0; i<post_list.length; ++i){
			await data.remove_all_likes_for_post(post_list[i]._id.toString())
		}
		reply.data.posts = post_list;
		res.send(reply);

	}catch(e){
		// console.log(e);
		res.status(404).json({error: e})
	}
});

module.exports = router;