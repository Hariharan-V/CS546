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
		animalType: animalType
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
	
	let delete_info =  await ac.removeOne({_id : ObjectId(id)});
		if(delete_info.deletedCount===0){
			throw ("couldn't delete animal of id "+id);
		}
	 	return {
	 		deleted: true,
	 		data: data
	 	}

};

const rename = async function rename(id, newName){
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

const delete_all = async function delete_all(){
	const ac = await animals();
	await ac.deleteMany({});
}

module.exports = {
	
	create,
	getAll,
	get,
	remove,
	rename,
	delete_all


}