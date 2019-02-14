const axios = require('axios');


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

module.exports = {
	shouldTheyGoOutside

}