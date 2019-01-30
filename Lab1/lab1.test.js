const lab1 = require("./lab1");

console.log(lab1.questionOne([1, 2, 3])); 
// should output 14
console.log(lab1.questionOne([5, 7, 9])); 
// should output 155
console.log(lab1.questionOne([23, 77, 98]));
// should output 16062
console.log(lab1.questionOne([-10, -20, 90])); 
// should output 8600
console.log(lab1.questionOne([120, 220, 329])); 
// should output 171041
console.log(lab1.questionTwo(7)); 
// should output 13 
console.log(lab1.questionTwo(-100)); 
// should output 0
console.log(lab1.questionTwo(50)); 
// should output 12586269025
console.log(lab1.questionTwo(0)); 
// should output 0 
console.log(lab1.questionTwo(1)); 
// should output 1

console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196
console.log(lab1.questionThree("YeLLOW"));
//should output 2
console.log(lab1.questionThree("OrAnge"));
//should output 3
console.log(lab1.questionThree("lemon"));
//should output 2
console.log(lab1.questionThree("supercalifragilisticexpialidocious"));
//should output 16

console.log(lab1.questionFour(10)); 
// should output 3628800 
console.log(lab1.questionFour(-1)); 
// should output NaN
console.log(lab1.questionFour(0)); 
// should output 1
console.log(lab1.questionFour(8)); 
// should output 40320
console.log(lab1.questionFour(50)); 
// should output 3.0414093e+64
