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
	if(index<1){
		throw "index out of bounds";
	}
	const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	if(index>=data.length+1){
		throw("index out of bounds");
	}
	return(data[index-1]);
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
const search_name = async function search_name(str){
	var {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	var result = [];
	str = str.toLowerCase();
	for (let x = 0; x<data.length; x++){
		let o = data[x];
		let name = o.firstName+" "+o.lastName;
		name = name.toLowerCase();
		if(name.includes(str)){
			result.push(o);
		}
		if(result.length==20){
			break;
		}
	}
	return result;
}
module.exports = {
	getPersonById,
	lexIndex,
	firstNameMetrics,
	search_name

}