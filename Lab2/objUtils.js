const extend = function extend(...args){
	if(args===undefined || args.length<2){
		throw ("this function needs at least two arguments");
	}
	let non_objects = args.filter(x=>typeof x != 'object');
	if(non_objects!=0){
		throw ('not all arguments are objects');
	}
	let obj = {};
	args.forEach(function(object){
		Object.keys(object).forEach(function(key){
			if(obj[key]===undefined){
				obj[key]=object[key];
			}
		})

	})
	return obj;
}

const smush = function smush(...args){
	if(args===undefined || args.length<2){
		throw ("this function needs at least two arguments");
	}
	let non_objects = args.filter(x=>typeof x != 'object');
	if(non_objects!=0){
		throw ('not all arguments are objects');
	}
	let obj = {};
	args.forEach(function(object){
		Object.keys(object).forEach(function(key){
			
				obj[key]=object[key];
			
		})

	})
	return obj;	

}
const mapValues = function mapValues(object, func){
	if(object===undefined){
		throw ("No arguments provided");
	}
	if(typeof object!='object'){
		throw ("first argument not of type object");
	}
	if(func===undefined){
		throw("second argument not provided");
	}
	if(typeof func != "function"){
		throw("second argument not of type function");
	}
	obj = {};
	Object.keys(object).forEach(function(key){
		obj[key] = func(object[key]);
	})
	return obj;
}
module.exports = {
	extend,
	smush,
	mapValues
}