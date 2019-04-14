(function($){
	var num_input = $("#num_input");
	var num = null;
	var submit = $("#submit");
	function isPrime(number){
		let upper = Math.sqrt(number);
		if(number<=1){
			return false;
		}
		for(let x = 2; x<=upper; x++){
			if(number%x==0){
				return false;
			}
		}
		return true;
	};
	function validate(){
		num_str = num_input.val();
		num = Number(num_str);

		if(num_str===undefined||num_str ===""||num_str === null||num===NaN){
			alert("Input has to contain a positive number");
			return false;
		}
		
		if( num<0){
			alert("Input has to contain a positive number");
			return false;
		}
		if(Number.isInteger(num)==false){
		
			alert("Has to be a whole number");

			return false;
		}
		return true;
	};
	submit.click(function(){
		if(validate()){

			if(isPrime(num)){
				$("#attempts").append("<li class ='is-prime'>"+num+" is a prime number</li>");
			} else{
				$("#attempts").append("<li class ='not-prime'>"+num+" is NOT a prime number</li>");
			}
		}
		//e.preventDefault();

	})
	num_input.keypress(function(e){
	
		if(e.which==13){
			if(validate()){

			if(isPrime(num)){
				$("#attempts").append("<li class = \"is-prime \">"+num+" is a prime number</li>");
			} else{
				$("#attempts").append("<li class = \" not-prime\">"+num+" is NOT a prime number</li>");
			}
			}

		}
	});

})(jQuery);