//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
//Parameters Edge cases : take in array of integers and numbers and return as numbers only
//Return sum of arrays 
//Examples
//Psuedo Code
//.reduce() when you see sum to return a single value
//Number()to make the current value a number
//0 makes the initial value a number and not a string to avoid concatenation

function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}
console.log(sumOfValues(['5',3,'2',1]))


//this is the same as the above fn but in 1 line
const s = r => r.reduce((a,c)=>+a+ +c)
console.log(s(['5',3,'2',1]))
//The function expression s is using arrow function to create an array r. Arrow functions IMPLICITLY returns the value of the .reduce() method so the return key word does not need to be used or typed. The .reduce() method holds the accumulator and current value. The Number() works the same as using + infront of a variable making it a number. So +a and +c become numbers. The space between + + is necessary +a+ +c will work but +a++c will not work.