const animal_connection = require("./data/animals");
const connection = require("./data/connection");
async function main(){

	let sasha = undefined, lucy = undefined;
	
	try{
		 sasha = await animal_connection.create("Sasha",'Dog');
		console.log(sasha);

	} catch(e){
		console.log(e);
	}

	try{
		lucy = await animal_connection.create("Lucy","Dog");
	}
	catch(e){
		console.log(e);
	}
	try{
		let x = await animal_connection.getAll();
		console.log(x);
	}
	catch(e){
		console.log(e);
	}
	try{
		let x = await animal_connection.create("Duke","Walrus");
		console.log(x);
	}
	catch(e){
		console.log(e);
	}
	try{
		let x = await animal_connection.rename(sasha._id.toString(),"Sashita");
		console.log(x);
	}
	catch(e){
		console.log(e);
	}
	try{
		let x = await animal_connection.remove(lucy._id.toString());
	}
	catch(e){
		console.log(e);
	}
	try{
		let x = await animal_connection.getAll();
		console.log(x);
	}
	catch(e){
		console.log(e);
	}
	const db = await connection();
  await db.serverConfig.close();
	
}
main();
