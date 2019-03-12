const posts =  require("./collections").posts;
var ObjectId = require('mongodb').ObjectID;
const create_object = function create_object(title,author,content){
	if(title===undefined){
		throw "title not given";
	}
	if(author===undefined){
		throw "author type not given";
	}
	if(content===undefined){
		throw "content type not given";
	}
	if(typeof title !== 'string'){
		throw "title value is not a string";
	}
	if(typeof author!=='string'){
		throw 'author type is not a string';
	}
	if(typeof content!=='string'){
		throw 'content type is not a string';
	}
	// if(animalType.length==0||name.length==0){
	// 	throw 'emtpy string not valid';
	// }

	return {
		
		title: title,
		author: author,
		content: content
	};

};
const create = async function create(title,author,content){
	var obj = create_object(title,author,content);
	const ac = await posts();
	const insertInfo = await ac.insertOne(obj);
	if(insertInfo.insertedCount==0){
		throw "Could not add animal";
	}
	return await ac.findOne({_id: insertInfo.insertedId});
};

const getAll = async function getAll(){
	const ac = await posts();
	const post_list = await ac.find({}).toArray();
	return post_list;
};

const get = async function get(id){
	if(id ===undefined){
		throw "id not given";
	}
	if(typeof id !== "string"){
		throw "type of id not a string";
	}

	const ac = await posts();
	const posts_result = await ac.findOne({_id : ObjectId(id)});
	if(posts_result===null){
		throw ("no post with given id "+id);
	}
	return posts_result;
};
const get_post_list = async function get_post_list(author){
	if(author===undefined){
		throw "author id not provied";
	}
	if(typeof author!== "string"){
		throw "author id not of type string"
	}
	const ac = await posts();

	const post_list = (await ac.find({author:author},{projection:{content:0, author: 0}})).toArray();
		
	return post_list;
};

const remove = async function remove(id){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	

	const ac = await posts();

	let data = undefined;
	try{
		data = await get(id);
	}catch(e){
		throw ("couldn't delete animal of id "+id);
	
	}
	
	let delete_info =  await ac.deleteOne({_id : ObjectId(id)});
		if(delete_info.deletedCount===0){
			throw ("couldn't delete animal of id "+id);
		}
	 	return {
	 		deleted: true,
	 		data: data
	 	}

};
const remove_authored_posts = async function remove_authored_posts(author){
	if(author ===undefined){
		throw "id not given";
	}
	if (typeof author !== "string"){
		throw "id not of type string";
	}
	

	const ac = await posts();

	let data = undefined;
	
		data = await get_post_list(author)
	
	
	let delete_info =  await ac.deleteMany({author : author});
		
	 return data;
};

const rename_content = async function rename_content(id,  new_content){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}

	if(new_content ===undefined){
		throw "new content not given";
	}
	if (typeof new_content!== "string"){
		throw "new content not of type string";
	}
	const ac = await posts();
	let new_obj = {$set:{
		content: new_content
	}};
	const update_info = await ac.updateOne({_id: new ObjectId(id)},new_obj);
	if(update_info.modifiedCount===0){
		throw ("no post of id "+ id+ " was updated");
	}
	return await get(id);

};
const rename_title = async function rename_title(id, new_title){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	if(new_title ===undefined){
		throw "new title not given";
	}
	if (typeof new_title!== "string"){
		throw "new title not of type string";
	}
	
	const ac = await posts();
	let new_obj = {$set:{
		title: new_title
	}};
	const update_info = await ac.updateOne({_id: new ObjectId(id)},new_obj);
	if(update_info.modifiedCount===0){
		throw ("no post of id "+ id+ " was updated");
	}
	return await get(id);

};



module.exports = {
	
	create,
	getAll,
	get,
	remove,
	rename_title,
	rename_content,
	remove_authored_posts,
	get_post_list


}