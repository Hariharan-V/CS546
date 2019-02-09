//i pledge my honor that I've abided by the stevens honor system
const head = function head(array){
/* Returns the first element of an array.
You must check:
That the array exists
The array is of the proper type
The array is not empty
If any of those conditions fail, you will throw an error.
*/
	if(array===undefined){
		throw "missing argument";
	}
	if(!Array.isArray(array)){
		throw "argument is not of type array"
	}
	if(array.length==0){
		throw "array is of size 0"
	}
	return array[0];
	
}


const last = function last(array){
/*Returns the last element of an array.
You must check:
That the array exists
The array is of the proper type
The array is not empty
If any of those conditions fail, you will throw an error.
*/
	if(array===undefined){
		throw "missing argument";
	}
	if(!Array.isArray(array)){
		throw "argument is not of type array";
	}
	if(array.length==0){
		throw "array is of size 0";
	}
	return array[array.length-1];
}


const remove = function remove (array, index){
/*
Removes the element at the specified index of the array, and returns the new array.

You must check:

That the array exists
The array is of the proper type
The array is not empty
That the index is within bounds
If any of those conditions fail, you will throw an error.
*/
	if(array===undefined){
		throw "missing array argument";
	}
	
	if(!Array.isArray(array)){
		throw "argument is not of type array";
	}
	if(array.length==0){
		throw "array is of size 0";
	}
	if(index===undefined){
		throw "index argument not provided";
	}
	if(typeof index != "number"){
		throw "index is not of type number"
	}
	if(!Number.isInteger(index)){
		throw "index is not valid";
	}
	if(index<0||index>=array.length){
		throw "index out of bounds";

	}
	let new_array = [];
	let counter = 0;
	for(let i = 0; i<array.length; i++){
		if(i!=index){
			new_array[counter++]= array[i];
		}
	}
	return new_array;


}
const range = function range(end, value){
/*
Creates a new numbered array starting at 0 increasing by one up to, but not including the end argument. The value argument is optional, but when specified each element will be set to that value.

You must check that the end number exists and is of proper type, and is a positive integer greater than 0.

If any of those conditions fails, the function will throw.
*/
	
	if(end===undefined){
		throw("end value undefined");
	}
	if(typeof end !="number"){
		throw ("end value is of wrong type");
	}
	if(!Number.isInteger(end)){
		throw "end value is not an integer";
	}
	if(end<=0){
		throw("end value is invalid, has to be greater than zero");
	}
	let arr = [];

	for(let i = 0; i<end;i++){
		if(value===undefined){
			arr[i]=i;
		}else{
			arr[i] = value;
		}
	}
	return arr;

}
const countElements = function countElements(array){
/*
Will return an object with the count of each unique element in the array.

Note: Order does not matter in a JavaScript object, so your answer may have a different ordering.

Note: in JavaScript, all object keys are coerced to strings. For example:
You must check:

That the array exists
The array is of the proper type
If any of those conditions fails, the function will throw.


*/
	if(array===undefined){
		throw "missing array argument";
	}
	
	if(!Array.isArray(array)){
		throw "argument is not of type array";
	}
	let obj = {};
	for(let i =0; i<array.length; i++){
		if(obj[array[i]]===undefined){
			obj[array[i]]=1;
		} else{
			obj[array[i]]++;
		}
	}
	return obj;




}

const isEqual = function isEqual (arrayOne, arrayTwo){

/*
Given two arrays, check if they are equal in terms of size and elements and return a boolean. Order of the items in the elements matters when comparing equality.

You must check:

That the arrays exist
Each array is of the proper type
If any of those conditions fails, the function will throw.

This function allows empty arrays.



*/
	if(arrayOne===undefined){
		throw "missing first and second array argument";
	}
	
	if(!Array.isArray(arrayOne)){
		throw "argument is not of type array";
	}
	if(arrayTwo===undefined){
		throw "missing second array argument";
	}
	
	if(!Array.isArray(arrayTwo)){
		throw "argument is not of type array";
	}
	if(arrayOne.length!=arrayTwo.length){
		return false;
	}
	for(let i = 0; i<arrayOne.length;i++){
		if(arrayOne[i]!==arrayTwo[i]){
			return false
		}
	}
	return true;



}

module.exports = {

    head,
    last,
   remove,
   range,
   countElements,
   isEqual
};



