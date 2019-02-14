const people = require("./people");
const weather = require("./weather");
const work = require ("./work");




async function main(){

	try{
		var x = await people.getPersonById(43);
		if(x=="Brew Peat"){
			console.log("getPersonByID 43 - "+x+" passed succesfully");
		}else{
			throw "getPersonById(43) failed unsucessfuly";
		}

	} catch(e){
		console.log(e);
	}
	try{
		var x = await people.getPersonById(-1);
		console.log(" getPersonById(-1) passed unsuccesfully")

	} catch(e){
		console.log("   getPersonById(-1) failed succesfully");
	}
	try{
		var x = await people.getPersonById(1000);
		console.log("   getPersonById(1000) passed unsuccesfully")

	} catch(e){
		console.log(" getPersonById(1000) failed succesfully");
	}
	try{
		var x = await people.getPersonById(1000);
		console.log("   getPersonById(1000) passed unsuccesfully")

	} catch(e){
		console.log(" getPersonById(1000) failed succesfully");
	}
	try{
		var x = await people.getPersonById();
		console.log("  getPersonById(); passed unsuccesfully")

	} catch(e){
		console.log(" getPersonById(); failed succesfully");
	}
	try{
		var x = await people.getPersonById({});
		console.log("  getPersonById({}); passed unsuccesfully")

	} catch(e){
		console.log(" getPersonById({}); failed succesfully");
	}
	try{
		var x = await people.getPersonById(1.3);
		console.log("  getPersonById(1.3); passed unsuccesfully")

	} catch(e){
		console.log(" getPersonById(1.3); failed succesfully");
	}

	try{
		var x = await people.lexIndex(2);
		if(x=="Dermot Abberley"){
			console.log("lexIndex(2) - "+x+" passed succesfully");
		}else{
			throw "lexIndex(2) failed unsucessfuly";
		}

	} catch(e){
		console.log(e);
	}	

	try{
		var x = await people.lexIndex(-1);
		console.log(" people.lexIndex(-1) passed unsuccesfully")

	} catch(e){
		console.log(" people.lexIndex(-1) failed succesfully");
	}
	try{
		var x = await people.lexIndex(1000);
		console.log("  people.lexIndex(1000) passed unsuccesfully")

	} catch(e){
		console.log(" people.lexIndex(1000) failed succesfully");
	}
	try{
		var x = await people.lexIndex();
		console.log("  people.lexIndex() passed unsuccesfully")

	} catch(e){
		console.log(" people.lexIndex() failed succesfully");
	}
	try{
		var x = await people.lexIndex(1.3);
		console.log("  people.lexIndex(1.3) passed unsuccesfully")

	} catch(e){
		console.log(" people.lexIndex(1.3) failed succesfully");
	}
	try{
		var x = await people.firstNameMetrics();
		console.log(" firstNameMetrics() returned " + x)

	} catch(e){
		console.log("firstNameMetrics returned error  "+ e);
	}	
	try{
		var x = await weather.shouldTheyGoOutside("Scotty", "Barajaz");
		if(x=="Yes, Scotty should go outside."){
			console.log("weather.shouldTheyGoOutside(\"Scotty\", \"Barajaz\"); passed succesfully");
		}else{
			throw ("weather.shouldTheyGoOutside(\"Scotty\", \"Barajaz\"); failed unsuccesfully");
		}
	}catch(e){

		console.log(e);

	}
	try{
		var x = await weather.shouldTheyGoOutside("Calli", "Ondrasek");
		if(x=="No, Calli should not go outside."){
			console.log("shouldTheyGoOutside(\"Calli\", \"Ondrasek\"); passed succesfully");
		}else{
			throw ("shouldTheyGoOutside(\"Calli\", \"Ondrasek\");  failed unsuccesfully");
		}
	}catch(e){

		console.log(e);

	}	
	try{
		var x = await weather.shouldTheyGoOutside() ;
		console.log("shouldTheyGoOutside() passed unsucessfuly");
	}catch(e){
		console.log("shouldTheyGoOutside() failed successfully")
	}
	try{
		var x = await weather.shouldTheyGoOutside("bob") ;
		console.log("shouldTheyGoOutside(bob) passed unsucessfuly");
	}catch(e){
		console.log("shouldTheyGoOutside(bob) failed successfully")
	}
	try{
		var x = await weather.shouldTheyGoOutside("bob","smith") ;
		console.log("shouldTheyGoOutside(bob,smith) passed unsucessfuly");
	}catch(e){
		console.log("shouldTheyGoOutside(bob,smith) failed successfully")
	}
	try{
		var x = await weather.shouldTheyGoOutside({}) ;
		console.log("shouldTheyGoOutside({}) passed unsucessfuly");
	}catch(e){
		console.log("shouldTheyGoOutside({}) failed successfully")
	}
	try{
		var x = await weather.shouldTheyGoOutside("bob",{}) ;
		console.log("shouldTheyGoOutside(bob,{}) passed unsucessfuly");
	}catch(e){
		console.log("shouldTheyGoOutside(bob,{}) failed successfully")
	}
	try{
		var x = await work.whereDoTheyWork("Demetra", "Durrand") ;
		if(x=="Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."){
			console.log("work.whereDoTheyWork(\"Demetra\", \"Durrand\") passed succesfully ")
		}else{
			throw "work.whereDoTheyWork(\"Demetra\", \"Durrand\") failed unsucessfuly"
		}

	}
	catch(e)
	{ 
		console.log(e);
	}
	try{
		var x = await work.whereDoTheyWork("Hank", "Tarling") ;
		if(x=="Hank Tarling - Technical Writer at Babbleblab. They will not be fired."){
			console.log("work.whereDoTheyWork(\"Hank\", \"Tarling\") passed succesfully ")
		}else{
			throw "work.whereDoTheyWork(\"Hank\", \"Tarling\") failed "+ x+ " unsucessfuly"
		}

	}
	catch(e)
	{ 
		console.log(e);
	}
	try{
		var x = await work.whereDoTheyWork() ;
		console.log("whereDoTheyWork() passed unsucessfuly");
	}catch(e){
		console.log("whereDoTheyWork() failed successfully")
	}
	try{
		var x = await work.whereDoTheyWork("Bob") ;
		console.log("whereDoTheyWork(Bob) passed unsucessfuly");
	}catch(e){
		console.log("whereDoTheyWork(Bob) failed successfully")
	}
	try{
		var x = await work.whereDoTheyWork("bob","smith") ;
		console.log("whereDoTheyWork(Bob,smith) passed unsucessfuly");
	}catch(e){
		console.log("whereDoTheyWork(Bob,smith) failed successfully")
	}
	try{
		var x = await work.whereDoTheyWork({}) ;
		console.log("whereDoTheyWork({}) passed unsucessfuly");
	}catch(e){
		console.log("whereDoTheyWork({}) failed successfully")
	}
	try{
		var x = await work.whereDoTheyWork("Bob",{}) ;
		console.log("whereDoTheyWork(bob,{}) passed unsucessfuly");
	}catch(e){
		console.log("whereDoTheyWork(bob,{}) failed successfully")
	}
	try{
		var x = await work.findTheHacker("79.222.167.180");
		if(x=="Robert Herley is the hacker!"){
			console.log("work.findTheHacker(79.222.167.180); passed succesfully ")
		}else{
			throw "work.findTheHacker(79.222.167.180); failed succesfully "
		}
	}catch(e){
		console.log(e);
	}
	try{
		var x = await work.findTheHacker("foobar") ;
		console.log("findTheHacker(foobar) ; passed unsucessfuly");
	}catch(e){
		console.log("findTheHacker(foobar) failed successfully")
	}
	try{
		var x = await work.findTheHacker() ;
		console.log("findTheHacker() ; passed unsucessfuly");
	}catch(e){
		console.log("findTheHacker() failed successfully")
	}
	try{
		var x = await work.findTheHacker(1) ;
		console.log("findTheHacker(1) ; passed unsucessfuly");
	}catch(e){
		console.log("findTheHacker(1) failed successfully")
	}

}

main();