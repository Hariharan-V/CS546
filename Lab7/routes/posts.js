const express = require("express");
const router = express.Router();
const animals = require("../data").animals;
const posts = require("../data").posts;
router.get("/",async(req,res)=>{

	try{
		let list = await posts.getAll();
		for(let i = 0; i<list.length; i++){
			let author = await animals.get(list[i].author);
			list[i].author = {
				_id: list[i].author,
				name: author.name
			}
		}
		res.send(list)
	}catch(e){
		res.status(500).send();
	}
});
router.get("/:id",async(req,res)=>{
	try{
		
		let post = await posts.get(req.params.id);
		

		post.author = {
			_id: post.author,
			name: (await animals.get(post.author)).name
		}
		// console.log('here2');
		res.status(200).send(post);
	}catch(e){
		// console.log(e);
		res.status(404).json({error: e});
	}
	
});
router.post("/",async(req,res)=>{
	let obj = req.body;
	if(obj===undefined){
		res.status(400).send();
		return;
	}
	const {title,author,content} = obj;
	if(title===undefined||author===undefined||content===undefined){
		res.status(400).send();
		return;
	}
	try{
		let name = (await animals.get(author)).name
		let post = await posts.create(title,author,content)
		post.author = {
			_id: post.author,
			name: name
		}
		res.status(200).send(post);
	} catch(e){
		// console.log()
		res.status(404).json({error: e});
	}
});
router.put("/:id",async(req,res)=>{
	let obj = req.body;
	if(obj===undefined){
		res.status(400).send();
		return;
	}
	const {newTitle,newContent} = obj;
	if(newTitle===undefined&&newContent===undefined){
		res.status(400).send();
		return;
	}
	try{
		await posts.get(req.params.id);
		if(newTitle!==undefined){
			try{
				await posts.rename_title(req.params.id,newTitle);
			}catch(e){}
		}
		if(newContent!==undefined){
			try{
			await posts.rename_content(req.params.id,newContent);
			}catch(e){}
		}
		res.status(200).send();
	}catch(e){
		res.status(404).json({error: e});
		// console.log(e);
	}



});

router.delete("/:id",async(req,res)=>{
		try{
		await posts.get(req.params.id);
		const reply = await posts.remove(req.params.id);
		let author = await animals.get(reply.data.author);
			reply.data.author = {
				_id: reply.data.author,
				name: author.name
			}
		await animals.remove_all_likes_for_post(req.params.id);
		res.send(reply);

	}catch(e){
		// console.log(e);
		res.status(404).json({error: e})
	}
});

module.exports = router;