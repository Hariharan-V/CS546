
const capitalize = function capitalize(string){
/*
Given a string, capitalize the first letter and lowercase the remaining characters.

You must check:

That the string exist
The string is of the proper type
If any of those conditions fails, the function will throw.

This function allows empty strings

*/
	if(string===undefined){
		throw ("string argument missing");
	}
	if(typeof string != "string"){
		throw ("argument not of type string");
	}
	if(string.length==0){
		return string;
	}
	let str = "";
	str += string[0].toUpperCase();
	for(let i = 1; i<string.length; i++){

		str += string[i].toLowerCase();
	}


	return str;



}

const repeat = function repeat(string, num){

/*
Given string and num, repeat the string num amount of times.

You must check:

That the string exist
The string is of the proper type
The number provided exists and is a positive number
If any of those conditions fails, the function will throw.

This function allows empty strings

*/
	if(string===undefined){
		throw ("string argument missing");
	}
	if(typeof string != "string"){
		throw ("argument not of type string");
	}
	if(num==undefined){
		throw ("number argument missing");
	}
	if(typeof num != "number"){
		throw ("number argument not a number");
	}
	if(!Number.isInteger(num)){
		throw ("number argument is not a integer");
	}
	if(num<0){
		throw ("number argument has to be greater than or equal to  zero");
	}
	let str = '';
	while(num){
		str+=string;
		num--;
	}
	return str;

}

const  countChars = function countChars(string){
/*
Return an object that has the mapping of a character and the amount of times it appears in a string. Hint: You may use a function you have written already.

You must check:

That the string exist
The string is of the proper type
If any of those conditions fails, the function will throw.

This function allows empty strings
*/

	if(string===undefined){
		throw ("string argument missing");
	}
	if(typeof string != "string"){
		throw ("argument not of type string");
	}

let arrayUtils = require("./arrayUtils");
return arrayUtils.countElements(string.split(""));


}



module.exports = {
	capitalize,
	repeat,
	countChars
};