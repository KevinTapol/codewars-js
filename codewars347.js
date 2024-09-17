/*
Arithmetic List!

Parameters or Edge Cases:
    all three inputs will be integers
    1st input represents the starting point
    2nd input represents the step or increment
    3rd input represents length or number of elements in the array

Return:
    return an array with a starting point of the 1st input, a step or increment of the 2nd input and a length or number of elements of the 3rd input

Examples:
    0,1,20 --> [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

Pseudocode:
    create an array with the length of the 3rd input starting at the 1st input and incrementing by the 2nd input
    return the array
*/

// My Answer
function seqlist(start, step, length){
    return Array.from({length: length}, (e,i) => i === 0 ? start : e = start+= step )
}

// My Answer refactored one liner arrow fn
const seqlist = (s,o,l) => Array.from({length: l}, (e,i) => i === 0 ? s : e = s+= o )

console.log(seqlist(0,1,20)) // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

// Best Practices and Most Clever
// brute force for loop using start and stop but NOT step. Instead the increment is in the for loop conditional for each iteration. I strongly disagree with this being best practices because the step logic is not in the traditional location logic of start stop step, but agree that it is clever.
function seqlist(first, c, l) {
    for (var list = []; list.length < l; )
      list.push(first + c * list.length);
    return list;
}

// imo Best Practice brute force for loop with logic in the start stop step
var seqlist = function(first,c,l){
    var result = [];
    for(var i = 0, val = first; i < l; i++, val += c) {
      result.push(val);
    }
    return result;
}

// using Array.apply() instead of Array.from()
var seqlist = function(f,c,l){
    return Array.apply(null, new Array(l)).map(function(a,i){
     return f + i * c;
    });
}

// using several array functions and Array. instead of Array.from({length:} logic)
var seqlist = function(first,c,l){
 
    return new Array(l+1).join('0').split('').map(function(a,i){return first+i*c});
  
}

// clever to use a spread operator to create an array with l number of elements then .map() overwrite the elements maintaining the same number of elements.
const seqlist = (first, c, l) => [...Array(l)].map((_, idx) => idx * c + first);

// clever use of Array.fill()
const seqlist = (first,c,l) => new Array(l).fill(first).map((el, ind) => el += c * ind)

// while loop with the number of elements decrementing as it's conditional logic
var seqlist = function(first, c, l){
    var result = [first];
    while (--l)
      result.push(first += c);
    return result;
}