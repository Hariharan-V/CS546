const animals =  require("./collections").animals;
var ObjectId = require('mongodb').ObjectID;
const create_object = function create_object(name, animalType){
	if(name===undefined){
		throw "name not given";
	}
	if(animalType===undefined){
		throw "animal type not given";
	}
	if(typeof name !== 'string'){
		throw "name value is not a string";
	}
	if(typeof animalType!=='string'){
		throw 'animal type is not a string';
	}
	
	// if(animalType.length==0||name.length==0){
	// 	throw 'emtpy string not valid';
	// }

	return {
		
		name: name,
		animalType: animalType,
		likes:[]
	};

};
const create = async function create(name, animalType){
	var obj = create_object(name, animalType);
	const ac = await animals();
	const insertInfo = await ac.insertOne(obj);
	if(insertInfo.insertedCount==0){
		throw "Could not add animal";
	}
	return await ac.findOne({_id: insertInfo.insertedId});
};

const getAll = async function getAll(){
	const ac = await animals();
	const animal_list = await ac.find({}).toArray();
	return animal_list;
};

const get = async function get(id){
	if(id ===undefined){
		throw "id not given";
	}
	if(typeof id !== "string"){
		throw "type of id not a string";
	}

	const ac = await animals();
	const animal_result = await ac.findOne({_id : ObjectId(id)});
	if(animal_result===null){
		throw ("no animal with given id "+id);
	}
	return animal_result;
};

const remove = async function remove(id){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	

	const ac = await animals();

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

const rename = async function rename(id,  newName){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	if(newName ===undefined){
		throw "new name not given";
	}
	if (typeof newName!== "string"){
		throw "new name not of type string";
	}

	const ac = await animals();
	let new_obj = {$set:{
		name:newName
	}};
	const update_info = await ac.updateOne({_id: new ObjectId(id)},new_obj);
	if(update_info.modifiedCount===0){
		throw ("no animal of id "+ id+ " was updated");
	}
	return await get(id);

};
const rename_type = async function rename_type(id,  animalType){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	if(animalType ===undefined){
		throw "new name not given";
	}
	if (typeof animalType!== "string"){
		throw "new name not of type string";
	}
	
	const ac = await animals();
	let new_obj = {$set:{
		animalType:animalType
	}};
	const update_info = await ac.updateOne({_id: new ObjectId(id)},new_obj);
	if(update_info.modifiedCount===0){
		throw ("no animal of id "+ id+ " was updated");
	}
	return await get(id);

};


const add_like = async function add_like(id, PostID){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	if(PostID ===undefined){
		throw "POSTID not given";
	}
	if(typeof PostID!== "string"){
		throw "PostID not a string"
	}

	const ac = await animals();
	const update_info = await ac.updateOne({_id: new ObjectId(id)},{$addToSet:{likes:PostID}});
	if(update_info.modifiedCount===0){
		throw ("no animal of id "+ id+ " had its likes updated");
	}
	return await get(id);

};

const remove_like = async function remove_like(id, PostID){
	if(id ===undefined){
		throw "id not given";
	}
	if (typeof id !== "string"){
		throw "id not of type string";
	}
	if(PostID ===undefined){
		throw "IDPOST not given";
	}
	if(typeof PostID!== "string"){
		throw "PostID not a string"
	}

	const ac = await animals();
	const update_info = await ac.updateOne({_id: new ObjectId(id)},{$pull:{likes:PostID}});
	if(update_info.modifiedCount===0){
		throw ("no animal of id "+ id+ " had its likes updated");
	}
	return await get(id);

};

const remove_all_likes_for_post = async function remove_all_likes_for_post(PostID){
	if(PostID ===undefined){
		throw "new name not given";
	}
	if(typeof PostID!== "string"){
		throw "PostID not a string"
	}

	const ac = await animals();
	const update_info = await ac.updateMany({},{$pull:{likes:PostID}});

	
}

module.exports = {
	
	create,
	getAll,
	get,
	remove,
	rename,
	rename_type,
	add_like,
	remove_like,
	remove_all_likes_for_post


}