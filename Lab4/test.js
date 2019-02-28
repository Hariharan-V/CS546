const animals = require("./data/animals");
const connection = require("./data/connection");
async function main(){
	let id = undefined; let id2 = undefined;
	try{
		const mortimer = await animals.create("Mortimer", "Giraffe"); 
		id = mortimer._id.toString()
    	console.log(mortimer);
	}catch(e){
		console.log("Should not error out 8 "+e);
	}
	try{
		const mortimer = await animals.create();
    	console.log(mortimer);

	}catch(e){
		console.log("should error out 15 "+ e);
	}
	try{
		const mortimer = await animals.create("",);
    	console.log(mortimer);

	}catch(e){
		console.log("should error out 22 "+e);
	}
	try{
		const mortimer = await animals.create(1,2);
    	console.log(mortimer);

	}catch(e){
		console.log("should error out 29 "+e);
	}
	try{
		const mortimer = await animals.create("",2);
    	console.log(mortimer);

	}catch(e){
		console.log("should error out 36 "+e );
	}
	try{
		const mortimer = await animals.create("",""); id2 = mortimer._id.toString();
    	console.log(mortimer);

	}catch(e){
		console.log("should not error out 43"+e);
	}
	try{
		const mortimer = await animals.getAll();
		if(mortimer.length!=2) {throw "number of elements in database don't match";}
    	console.log(mortimer);

	}catch(e){
		console.log("should not error out 51"+e);
	}

	try{
		const mortimer = await animals.get(id);
		console.log(mortimer);
	}catch(e){
		console.log("should not error out 60 "+ e);
	}
	try{
		const m = await animals.get("blah");
		console.log(m);
	}catch(e){
		console.log (" should error out 66"+ e);
	}
	try{
		await animals.get();
	}catch(e){
		console.log(" should error out 71"+e);
	}
	try{
		await animals.get(123);
	}catch(e){
		console.log(" should error out 76 "+e);
	}
	try{
		console.log("deleting mortimer");
		const m = await animals.remove(id);
		console.log(m);
	}catch(e){
		console.log("should not error out 83 "+e);
	}
	try{
		const m = await animals.remove();
	}catch (e){
		console.log("should error out 88"+e);

	}
	try{
		const m = await animals.remove(123);
	}catch(e){
		console.log("should error out 84"+e);
	}
	try{
		const m = await animals.remove("123");
	}catch(e){
		console.log("should error out 99"+e);
	}
	try{
		const m = await animals.rename(id2,"bob");
		console.log(m);
	}catch(e){
		console.log("should not error out 105"+e);
	}
	try{
		const m = await animals.rename("bob");
		console.log(m);
	}catch(e){
		console.log("should  error out 111"+e);
	}
	try{
		const m = await animals.rename("bob","bob");
		console.log(m);
	}catch(e){
		console.log("should  error out 117"+e);
	}
	try{
		const m = await animals.rename();
		console.log(m);
	}catch(e){
		console.log("should  error out 123"+e);
	}
	try{
		const m = await animals.rename(123,435);
		console.log(m);
	}catch(e){
		console.log("should  error out 129"+e);
	}
	try{
		const m = await animals.rename(id,"hello");
	}catch(e){
		console.log("should error out 134 "+ e);
	}
	try{
		const m = await animals.get(id);
	}catch(e){
		console.log("should error out 139"+ e);
	}
	try{
		const m = await animals.remove(id);
	}catch(e){
		console.log("should error out 144"+ e);
	}
	const db = await connection();
  await db.serverConfig.close();

}

main();