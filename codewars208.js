// Parameters or Edge Cases:
//      input will be an array of at least 2 integers
//      there will be no duplicates of the highest value
// Return:
//      an array of the two highest value integers of the input array second highest value at index 0 and highest at index 1
// Examples:
//      [1, 2, 10, 8] --> [8, 10]
//      [1, 5, 87, 45, 8, 8] --> [45, 87]
//      [1, 3, 10, 0] --> [3, 10]
// Psuedo Code:
//      sort the array from largest to smallest
//      return an array of with the second element of the sorted array at index 0 and the first element of the sorted array at index 1

// my answer
function twoOldestAges(ages){
    // sort the array from largest to smallest
    ages.sort((a,b)=> b-a)
    // return an array of with the second element of the sorted array at index 0 and the first element of the sorted array at index 1
    return [ages[1],ages[0]]
}

console.log(twoOldestAges([1, 2, 10, 8])) // [8, 10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])) // [45, 87]
console.log(twoOldestAges([1, 3, 10, 0])) // [3, 10]

// my answer refactored arrow function
const twoOldestAges = (ages) => {ages.sort((a,b)=>b-a); return [ages[1],ages[0]]}
// my answer refactored sorting from smallest to largest and slicing backwards at the end of the index 
const twoOldestAges = (ages) => ages.sort((a,b)=>a-b).slice(-2)

// best practices and most clever 
// here they used .slice(-2) to slice backwards from instead of returning a new array of the index values at 1 and 0
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
}

// slice(-2) is the same as slice(array.length-2)
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(array){
    return array.sort(function(a,b) {return a-b}).slice(array.length-2);
}

// sorting from largest to smallest then reverse the splice
function twoOldestAges(ages){
    ages=ages.sort((a,b)=>b-a)
    return ages.splice(0,2).reverse()
}

// brute force for loop and conditionals
function twoOldestAges(ages){
    let oldest = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < ages.length; ++i)
    {
      if (ages[i] > oldest)
      {
        second = oldest;
        oldest = ages[i];
      }
      else if (ages[i] > second)
      {
        second = ages[i];
      }
    }
    
    return [second, oldest];
}

// using Math.max() and .splice()
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let findOldest = Math.max(...ages);
    
    let oldest = ages.splice(ages.indexOf(findOldest), 1)
    
    let findSecondOldest = Math.max(...ages);
  
    let secondOldest = ages.splice(ages.indexOf(findSecondOldest), 1);
  
    return [...secondOldest, ...oldest]
}

// while loop
// I don't like to use while loops because it can be so easy to forget the step (i++) at the end and create an infinite loop.
function twoOldestAges(ages){
    let i = 0;
    let res = [];
    let largest1 = 0;
    let largest2= 0;
    while (i < ages.length) {
      if (ages[i] > largest1) {
        largest2 = largest1;
        largest1 = ages[i];
      } else if (ages[i] > largest2) {
        largest2 = ages[i];
      }
      i++;
    }
    return [largest2, largest1]
}

// interesting sorting largest to smallest then filtering by index and reversing the array
function twoOldestAges(ages){
    return ages.sort((a, b) => b - a).filter((el, i) => i < 2).reverse();
}

// using filter to exclude all the values but the last 2
const twoOldestAges = ages => ages.sort((a, b) => a - b).filter((x, i) => x > ages[ages.length - 3]);

// using both parameters of splice() to go backwards from the array and grab the last 2 values
function twoOldestAges(ages) {      
    return ages.sort((a, b) => a - b).splice(-2, 2);
}