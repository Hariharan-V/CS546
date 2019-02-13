const axios = require('axios');

const getPersonById = async function getPersonById(index){
	if(index===undefined){
		throw ("index not provided");

	}
	if(typeof index!= 'number'){
		throw ('index not a number');
	}
	if(!Number.isInteger(index)){
		throw ('index not an integer');
	}
	if(index<0){
		throw "index out of bounds";
	}
	const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	if(index>=data.length){
		throw("index out of bounds");
	}
	return(data[index].firstName+" "+data[index].lastName);
}
const lexIndex = async function  lexIndex(index){
	if(index===undefined){
		throw "index not provided";

	}
	if(typeof index!= 'number'){
		throw ('index not a number');
	}
	if(!Number.isInteger(index)){
		throw ('index not an integer');
	}
	if(index<0){
		throw "index out of bounds";
	}

	var {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	if(index>=data.length){
		throw "index out of bounds";
	}
	const comp = function (x,y){ 
		return x.lastName.localeCompare(y.lastName);

	 };
	data.sort(comp);

	return(data[index].firstName+" "+data[index].lastName);

}

const firstNameMetrics = async function firstNameMetrics(){
	var {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	var obj = {totalLetters: 0, totalVowels: 0, totalConsonants: 0, longestName: "", shortestName: ""};
	var vowels = ['a','e','i','o','u','A','E','I','O','U'];
	var longest = 0;
	data.forEach(function(o){
		if(obj.longestName.length<o.firstName.length){
			obj.longestName = o.firstName;
		}
		if(obj.shortestName.length>o.firstName.length||obj.shortestName==""){
			obj.shortestName = o.firstName;
		}
		obj.totalLetters+=o.firstName.length;
		obj.totalVowels+=o.firstName.split("").filter(x=>vowels.includes(x)).length;
		obj.totalConsonants+=o.firstName.split("").filter(x=>!vowels.includes(x)).length;

	});
	return obj;

}
const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName, lastName){
	if( firstName== undefined){
		throw "first name not provided";
	}
	if(typeof firstName != 'string'){
		throw "first name not of type string";
	}
	if( lastName== undefined){
		throw "last name not provided";
	}
	if(typeof lastName != 'string'){
		throw "last name not of type string";
	}
	const data_people = (await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")).data;
	

	var people_obj = data_people.filter(x=>x.firstName== firstName && x.lastName == lastName)[0];
	if( people_obj == undefined){
		throw "name provided does not exist";
	}
	const data_weather = (await axios.get("https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json")).data;
	var temp = data_weather.filter(x=>people_obj.zip==x.zip)[0].temp;
	if(temp>=34){
		return "Yes, "+ firstName+ " should go outside.";
	}

	return "No, "+ firstName+ " should not go outside.";
}

const whereDoTheyWork = async function whereDoTheyWork(firstName, lastName){
	if( firstName== undefined){
		throw "first name not provided";
	}
	if(typeof firstName != 'string'){
		throw "first name not of type string";
	}
	if( lastName== undefined){
		throw "last name not provided";
	}
	if(typeof lastName != 'string'){
		throw "last name not of type string";
	}
	const data_people = (await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")).data;

	var people_obj = data_people.filter(x=>x.firstName== firstName && x.lastName == lastName)[0];
	if(people_obj == undefined){
		throw "name provided does not exist";
	}
	const data_work = (await axios.get("https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json")).data;
	var work_info = data_work.filter(x=>people_obj.ssn==x.ssn)[0];
	return firstName+" "+lastName+"-"+work_info.jobTitle+ " at "+ work_info.company+ ". "+ ((work_info.willBeFired)?"They will be Fired": "They will not be Fired");

}

const findTheHacker = async function findTheHacker(ip){
	if( ip == undefined){
		throw "ip not provided";
	}
	if(typeof ip!= 'string'){
		throw "ip not of type string";
	}
	const data_work = (await axios.get("https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json")).data;
	var work_info = data_work.filter(x=>ip==x.ip)[0];
	
	if( work_info === undefined){
		throw "ip does not exist";
	}
	const data_people = (await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")).data;
	var people_obj = data_people.filter(x=>x.ssn== work_info.ssn)[0];
	return people_obj.firstName + " "+people_obj.lastName+" is the Hacker!";

}
	var promise = findTheHacker("foobar");
	// var promise = firstNameMetrics();
	console.log(promise);
	 promise.then(x=>console.log(x)).catch(err=>console.log(err));
   // promise.then(x=>
   // 		console.log(x));
   



