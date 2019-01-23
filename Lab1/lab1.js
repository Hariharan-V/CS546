const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum+Math.pow(arr[i],2.0);
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num<1){
        return 0;
    }
    if(num==1){
        return 1;
    }
    let one = 0;
    let two = 1;
    for(let i = 2; i<=num; i++){
        let sum = one+two;
        one = two;
        two = sum;
    }
    return two;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for(let i = 0; i<text.length;i++){
        if(vowels.includes(text[i])){
            count++;
        }
    }
    return count;
        


}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num<0){
        return NaN;
    }
    if(num==0){
        return 1;
    }
    let result = 1;
    for(let x = num; x>0;x--){
        result = result*x;

    }
    return result;
}

module.exports = {
    firstName: "Hariharan", 
    lastName: "Vijayachandran", 
    studentId: "",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};