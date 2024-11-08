/*
Hit Count

Introduction
You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.

You have been tasked with adding an effect to this counter to make it more interesting.

Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.



Task
As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

Rules
The function will take one argument which will be a four character string representing hit count
The function must return a multi-dimensional array containing four inner arrays
The final value in each inner array must be the actual value to be displayed
Values returned in the array must be of the type number
Examples


Parameters or Edge Cases:
    inputs will be a string of integers with a length of 4

Return:
    return a matrix or 2D array of numbers where each element is an array range from number 0 to the string integer

Examples:
    "1250" --> [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
    "0050" --> [[0],[0],[0,1,2,3,4,5],[0]]
    "0000" --> [[0],[0],[0],[0]]

Pseudocode:
    split the input string into an array of numbers for each char
    create a shallow copy where each element is an array with a length of 1 + the char starting with 0 stopping with the char and stepping by 1 by setting the element equal to the current index
    return the 2D array
*/

// My Answer
function counterEffect(hitCount) {
    return hitCount.split('').map(e => Array.from({length:Number(e)+1 }, (e,i) => e = i))
}

// My Answer refactored one liner arrow fn
const counterEffect = hitCount => hitCount.split('').map(e => Array.from({length:Number(e)+1 }, (e,i) => e = i))

console.log(counterEffect("1250")) // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]

// Best Practices 
// brute force for loop
function counterEffect(str) {
	var output = [];
	for (var i = 0; i < str.length; i++) {
		var temp = [];
		for (var j = 0; j <= Number(str[i]); j++) {
			temp.push(j);
		} output.push(temp);
	} return output;
}

// Most Clever
// similar to my answer but using [...hitCount] instead of hitCount.split('') and + instead of Number() to convert the string into a number
function counterEffect(hitCount) {
    return [...hitCount].map( d => Array.from({length:+d+1}, (_,i) => i) )
}

// clever using .substring() on all the possible char ints where the current element is the substring starting at 0, ending at +element to convert from string to int and stepping by +1
function counterEffect(hitCount) {
    return hitCount.split('').map(function(x){
      return '0123456789'.substring(0, +x +1).split('').map(y => +y);
    });
}

// clever to use .keys() instead of index or current element
const counterEffect = hitCount => [...hitCount].map(val => [...Array(++val).keys()]);

// all possible str chars .slice() to create a start stop step with parseInt() to convert str to int 
counterEffect=hitCount=>hitCount.split('').map(a=>"0123456789".slice(0,parseInt(a)+1).split('').map(b=>parseInt(b)))

// using .match and regex
function counterEffect(hitCount) {
    return hitCount.match(/./g).map(x => [...Array(+x+1).keys()]);
}

// parseFloat() to convert string to float Array() for length .fill() for what to fill each element with .map() to overwrite each element
function counterEffect(n) {
    return n.split("").map(e => Array(parseFloat(e) + 1).fill("~").map((e, i) => i));
}

// similar to my answer but using a brute force for loop with an empty array to push to instead of str.split(''), [...str] or str.match(regex)  
const counterEffect = hitCount => {
    const res = []
  
    for (let n of hitCount) {
      let arr = Array.from({ length: ++n }).map((_, i) => i)
      res.push(arr)
    }
  
    return res
}

// .forEach() instead of for loop
function counterEffect(hitCount) {
    const resArr = []
    hitCount.split("").forEach(el=>{
      const arr = []
       for(let i = 0; i <= el;i++){
        arr.push(i)
      }
      resArr.push(arr)
    })
     return resArr
}

// .reduce() to create the 2D array but each 1D array is being created by each current element with the fn makeArr()
function counterEffect(hits) {
    const makeArr = n => [...Array(n+1)].map((e,i) => i)
    
    return [...hits].reduce((a,c) => (a.push(makeArr(+c)), a), [])
}