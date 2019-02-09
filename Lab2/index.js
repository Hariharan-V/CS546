//i pledge my honor that I've abided by the stevens honor system
//arrayUtils
const arrayUtils = require("./arrayUtils");
	//pass for head
try{
	if(arrayUtils.head([1,2,3])!=1){
		throw("head of [1,2,3]");
	}
	if(arrayUtils.head([1])!=1){
		throw("head of [1]");
	}
	console.log("testcase for head passed successfully");

} catch(e){
	console.log('testcases failed for function '+ e);
}

	//fail for head

try{
	arrayUtils.head();
	console.log("error did not occur");
} catch(e){
	console.log('testcases failed for head successfully');
}

try{
	arrayUtils.head([]);
	console.log("error did not occur");
} catch(e){
	console.log('testcases failed for head successfully');
}
try{
	arrayUtils.head('hello');
	console.log("error did not occur");
} catch(e){
	console.log('testcases failed for head successfully');
}
	//pass for last
try{
	if(arrayUtils.last([1,2,3])!=3){
		throw("last of [1,2,3]");
	}
	if(arrayUtils.last([1])!=1){
		throw("last of [1]");
	}
	console.log("testcases for last passed successfully")

} catch(e){
	console.log('testcases failed for function '+ e);
}	

	//fail for last

try{
	arrayUtils.last();
	console.log("error did not occur");
} catch(e){
	console.log('testcases failed for last successfully');
}

try{
	arrayUtils.last([]);
	console.log("error did not occur");
} catch(e){
	console.log('testcases failed  for last successfully');
}
try{
	arrayUtils.last('hello');
	console.log("error did not occur");
} catch(e){
	console.log('testcases failed  for last successfully');
}
	//pass for  remove
try{

	if(arrayUtils.remove([1,2,3],1)[1]!=3){
		throw("test case failed for remove([1,2,3],1)");
	}
	console.log("test cases for remove passed successfully");
}catch(e){
   console.log(e);
}

try{

	if(arrayUtils.remove([0],0).length!=0){
		
		throw("test case failed for remove([0],0)");
	}
	console.log("test cases for remove passed successfully");
}catch(e){
   console.log(e);
}
	//fail for remove
try{
	arrayUtils.remove();
	console.log("error did not occur");
}catch(e){
	console.log("testcases failed for remove successfully");

}
try{
	arrayUtils.remove(1);
	console.log("error did not occur");
}catch(e){
	console.log("testcases failed for remove successfully");

}

try{
	arrayUtils.remove([],10);
	console.log("error did not occur");
}catch(e){
	console.log("testcases failed for remove successfully");

}

try{
	arrayUtils.remove([9,0],"1");
	console.log("error did not occur");
}catch(e){
	console.log("testcases failed for remove successfully");

}
	//pass for range
try{
	let arr = arrayUtils.range(4);
	if(arr.length!=4||arr[0]!=0||arr[3]!=3){
		throw ("test case failed for arrayUtils.range(4)");
	}
	console.log("test case for range passed succesfully ");
	
}catch(e){

	console.log("testcases failed for range")
}
try{
	let arr = arrayUtils.range(4,"a");
	if(arr.length!=4||arr[0]!="a"||arr[3]!="a"){
		throw ("test case failed for arrayUtils.range(4,\"a\"");
	}
	console.log("test case for range passed succesfully ");
	
}catch(e){

	console.log("testcases failed for range")
}
	//fail for range
try{

	arrayUtils.range("hi");
	console.log("error did not occur");
}catch(e){
	console.log("test case for range successfully failed");

}
try{

	arrayUtils.range(-4);
	console.log("error did not occur");
}catch(e){
	console.log("test case for range successfully failed");

}
try{

	arrayUtils.range();
	console.log("error did not occur");
}catch(e){
	console.log("test case  for range successfully failed");

}




