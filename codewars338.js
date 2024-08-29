/*
Coding Meetup #11 - Higher-Order Functions Series - Find the average age
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = ;
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.

Parameters or Edge Cases:
    inputs will be an array of objects
    input arrays will always be valid and have the same order format of key value pairs
    the target key age of each object will contain a value type of integer

Return:
    return an integer representing the average of all the object value integers to the key age of all the objects rounded to the nearest integer

Examples:
    [
        { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
        { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
    ] --> 50
Pseudocode:
    iterate through the input array adding up all the values from each objects key age with .reduce() calling each element dynamically with c['key']
    
    NOTE even though age does not have quotes, we MUST use quotes to dynamically iterate through each object in the array for the .reduce() method. Otherwise, age will return as undefined.

    divide the sum by the length of the input array
    round the result to the nearest integer with Math.round()
    return the integer
*/

// My Answer, Best Practices and Most Clever
function getAverageAge(arr) {
    return Math.round(arr.reduce((acc, c) => acc + c['age'], 0)/arr.length)
}

// My Answer one liner arrow fn
const getAverageAge = arr => Math.round(arr.reduce((acc, c) => acc + c['age'], 0)/arr.length)

console.log(getAverageAge([
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
])) // 50

// Brute force for loop
// Note here they are using the key word of in the for loop conditional iterating by element and not index. Also, instead of dividing by the length of the array, they are counting the number of elements in the array per each for loop iteration.
function getAverageAge(list) {
    let count = 0;
    let sum = 0;
    
    for (let dev of list) {
      count++;
      sum += dev.age;
    }
    
    return Math.round( sum / count );
}

// Brute force for loop but iterating by index
function getAverageAge(list) {

    var total_years = 0;
  
    for (i = 0; i < list.length ; i++) { 
      total_years += list[i].age;
    }
    
    return Math.round(total_years / list.length);
}

// creating an input shallow copy with .map(element, index, array) instead of manipulating the data directly
function getAverageAge(list) {
    return Math.round(list.map((dev,i,arr) => dev.age).reduce((startingAge , currentAge) => startingAge + currentAge) /list.length)
}