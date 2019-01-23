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
    return questionTwo(num-1)+questionTwo(num-2);
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
    return num*questionFour(num-1);
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