const axios = require('axios');




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
	return firstName+" "+lastName+" - "+work_info.jobTitle+ " at "+ work_info.company+ ". "+ ((work_info.willBeFired)?"They will be fired.": "They will not be fired.");

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

module.exports = {
	whereDoTheyWork,
	findTheHacker

}   



