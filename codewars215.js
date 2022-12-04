// Parameters or Edge Cases:
//      given an array of intergers
// Return:
//      boolean true if the array is in ascending order else false
// Examples:
//      inAscOrder([1,2,4,7,19]); // returns true
//      inAscOrder([1,2,3,4,5]); // returns true
//      inAscOrder([1,6,10,18,2,4,20]); // returns false
//      inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
// Psuedo Code:
//      You CANNOT compare arrays in javascript because arrays are actually objects! You must either compare the individual elements or convert the array to something else comparable
//      convert the input array to a string and compare it to the input array sorted and converted to string
//      if equal comparing will implicitly return boolean true else false


// my answer
function inAscOrder(arr) {
    // convert the input array to a string and compare it to the input array sorted and converted to string
    // if equal comparing will implicitly return boolean true else false
    return arr.join("") === arr.sort((a,b)=>a-b).join("")
}

// my answer refactored arrow function ended up being the 2nd most clever
const inAscOrder = (a) => a.join("") === a.sort((a,b)=>a-b).join("")

console.log(inAscOrder([1,2,4,7,19])) // true
console.log(inAscOrder([1,2,3,4,5])) // true
console.log(inAscOrder([1,6,10,18,2,4,20])) // false
console.log(inAscOrder([9,8,7,6,5,4,3,2,1])) // false

// best practices
function inAscOrder(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        return false; 
      }
    }
    return true;
}

// most clever using .every(element, index) to compare each element if the next index element in the array is greater than the previous index element
function inAscOrder(arr) {
    return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
}

// using .slice() and .every()
function inAscOrder(arr) {
    return arr.slice(1).every((x, i) => x >= arr[i]);
}

// using .slice() .sort() and .every() in an arrow function
const inAscOrder = a => a
  .slice()
  .sort((x, y) => x - y)
  .every((e, i) => e === a[i]);

// using .length and .slice() in a ternary to compare
function inAscOrder(arr) {
    return arr.length > 1 
      ? arr[0] < arr[1] && inAscOrder(arr.slice(1)) 
      : true;
}

// using .every() but ! for not and decrementing instead of incrementing
const inAscOrder = arr => arr.every((val, idx) => !idx || val > arr[--idx]);

// brute force for loop but in an arrow function
const inAscOrder = arr => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i-1]) {return false;}
    }
    return true;
};

// using spread and .toString() instead of join()
function inAscOrder(arr) {
    // Code your algorithm here :)
    return arr.toString() ==  [...arr].sort((a,b) => a - b).toString()
    
}

// using ! for not and .some() instead of every()
const inAscOrder = arr => !arr.some((_,i) => arr[i]<arr[i-1]);

// descriptively using .every()
const inAscOrder = arr => arr.every((item, index, array) => index == 0 || item > array[index - 1], false);

// using .filter() and .length
function inAscOrder(arr) {
    return arr.filter((v,i,a)=>v>a[i+1]).length==0
}

// using JSON.stringify() to convert to string 
function inAscOrder(arr) {
    const sortedArr = [...arr].sort(function(a, b){return a-b});
    return JSON.stringify(arr) === JSON.stringify(sortedArr);
}

// clever imo using + to convert to string
function inAscOrder(a) {
    return a+a==a+a.slice().sort((a,b)=>a-b);
}