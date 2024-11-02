/*
Array Array Array

Parameters or Edge Cases:
    inputs will be a single array of 2 elements
    the elements can be either or both a string and/or number

Return:
    return a matrix or 2D array with the input as a sub array elements repeated based on the following conditions
    if both elements are number the length of the 2D array will be the sum of both numbers
    if one element is a number the length of the array will be that number
    if neither is a number the return an empty 1D array []

Examples:
    [9, 3] --> [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
    ['a', 3] --> [['a', 3], ['a', 3], ['a', 3]]  
    [6, 'c'] --> [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']] 
    ['a', 'b'] --> 'Void!'  
    ["a", 0] --> [] 

Pseudocode:
    check the typeof() the input array elements of both index 0 and index 1
    if both elements are typeof() number then add them up and create an array with the length of the sum where every element is the input array
    if one element typeof() is a number then create an array with the length of that number where every element is the input array
    if neither elements are numbers then return the string 'Void!'
*/

// My Answer brute force conditionals
function explode(x){
    if(typeof(x[0]) === 'number' && typeof(x[1]) === 'number'){
        return Array.from({length:(x[0] + x[1])}, (e) => e = x)
    }if(typeof(x[0]) === 'number' && typeof(x[1]) != 'number'){
        return Array.from({length:x[0]}, (e) => e = x)
    }if(typeof(x[0]) != 'number' && typeof(x[1]) === 'number'){
        return Array.from({length:x[1]}, (e) => e = x)
    } else {
        return 'Void!'
    }
}

/*
Since boolean true false combos evaluate to false I need to isolate the condition when both elements are strings to return 'Void!'. So, if I reverse the boolean true false with a ! then I can isolate all instances where the elements are numbers to generate an array else return 'Void!'.

add both elements then use regex to remove all str that are not [0-9] and convert the result into a number
create an array with the length of the result with the element(s) equal to the input 
sort fails because it alters the original value
*/
function explode(x){
    if(!(typeof x[1] === 'string' && typeof x[0] === 'string')){
        let str = (x[0] + x[1]).toString()
        let n = Number(str.replace(/[^0-9]/g, ''))
        return Array.from({length:n}, (e) => e = x)
    } else {
        return 'Void!'
    }
}

// My Answer Refactored
function explode(x){
    return !(typeof x[1] === 'string' && typeof x[0] === 'string') ? Array.from({length: Number((x[0] + x[1]).toString().replace(/[^0-9]/g, ''))}, (e) => e = x) : 'Void!'
}

// My Answer refactored one liner arrow fn
const explode = x => !(typeof x[1] === 'string' && typeof x[0] === 'string') ? Array.from({length: Number((x[0] + x[1]).toString().replace(/[^0-9]/g, ''))}, (e) => e = x) : 'Void!'

console.log(explode([9, 3])) // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])) // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode(['a', 'b'])) // 'Void!'
console.log(explode(["a", 0])) // []
console.log(explode([ 6, 'c' ])) // [ [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ], [ 6, 'c' ] ]

// Best Practices
// similar to my answer but reverse logic and using Array().fill() instead of Array.from()
function explode(x){
    let [a,b] = x;
    
    if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
    else if(typeof a == "number") return new Array(a).fill(x);
    else if(typeof b == "number") return new Array(b).fill(x);
    
    return 'Void!';
}

// Most Clever
/*
very clever type check to add 0 to combinations of the elements and if they are not equal then return 'Void!' else generate the array.

The generate array logic is based on either only one element being a string or both being a number. The + will try to convert the string into a number but fail and take the 0. If the input is a number then the + will keep the type as an integer and add it. Meaning if the input is a string it will return 0. If the input is a number it will return that number.

So, the || 0 logic means that if one is a string and converted with + to the other type to number which will fail and take the 0 answer. If the element is a number it converts to a string 
*/ 
const explode=([x,y])=>x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y])

// Clever using .filter() to grab only the instance of number elements and using that length in a conditional check. Also using .reduce() to add the values but most importantly to establish a default type using 0.
function explode(x){
    const filteredArr = x.filter( foo => typeof foo === 'number')
    return filteredArr.length ? Array(filteredArr.reduce(( a, b ) => a + b, 0)).fill(x) : 'Void!'
}

// Clever using .every with isNaN to check if both elements are strings and .reduce() logic to take into account the possibility of one being a string with the || 0 logic.
const explode = x => x.every(isNaN) ? 'Void!' : Array(x.reduce((a,c)=>a + (+c || 0), 0)).fill(x)

// destructuring the input
const explode = ({0:a, 1:b, 0:{0:x}, 1:{0:y}}) => x && y ? 'Void!' : Array((+a | 0) + (+b | 0)).fill([a,b])

// using .match and regex with truthy falsy logic to generate an array if a number exists and if not return 'Void!'
function explode(x){
    return x.join('').match(/[0-9]/g) ? Array(x.reduce((a,b)=>typeof b=='number'?a+b:a,0)).fill(x) : 'Void!'
}

// clever to use + conversion type check
function explode([ a, b ]) {

    let score;
  
    if (a === +a && b === +b)
      score = a + b;
    else if (a === +a)
      score = a;
    else if (b === +b)
      score = b;
    else
      return 'Void!';
  
    return Array(score).fill([ a, b ]);
  
}