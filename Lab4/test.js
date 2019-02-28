const animals = require("./data/animals");

async function main(){
	try{
		const mortimer = await animals.create("Mortimer", "Giraffe");
    	console.log(mortimer);
	}catch(e){
		console.log(e);
	}
	try{
		const mortimer = await animals.create();
    	console.log(mortimer);

	}catch(e){
		console.log(e);
	}
	try{
		const mortimer = await animals.create("",);
    	

	}catch(e){
		console.log(e);
	}
	try{
		const mortimer = await animals.create(1,2);
    	

	}catch(e){
		console.log(e);
	}
	try{
		const mortimer = await animals.create("",2);
    	

	}catch(e){
		console.log(e);
	}
	try{
		const mortimer = await animals.create("","");
    	

	}catch(e){
		console.log(e);
	}


}

main();