/*
Flatten
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

Parameters or Edge Cases:
Return:
Examples:
    flatten([1,2,3]) // => [1,2,3]
    flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
    flatten([[[1,2,3]]]) // => [[1,2,3]]
Pseudocode:
    The .flat() method flattens nested arrays given the number of times flattened as the argument. You can also pass in Infinity to ultimately flatten any amount of nested arrays into a single array. If left blank then, .flat() flattens an array once. 
*/

// My Answer
var flatten = function (array){
    return array.flat()
}

// My Answer One Liner Arrow fn
const flatten = (r) => r.flat()

console.log(flatten([1,2,3])) // [1,2,3]
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]])) // [1,2,3,"a","b","c",1,2,3]
console.log(flatten([[[1,2,3]]])) // [[1,2,3]]

// Best Practices and Most Clever
var flatten = function (lol){
    return [].concat.apply([],lol);
  }
// Create an empty array. Iterate through the input array and concat elements to the empty array.
const flatten = (array) => [].concat(...array);

// using .reduce()
var flatten = function (array){
    return array.reduce(function(a,z) {
      return a.concat(z);
    }, []);
  }

// also .reduce
const flatten = (...args) => args.reduce((acc,cur) => acc.concat(...cur), []);

// brute force for loop
var flatten = function (array){
    var res = [];
    for(var i=0; i<array.length; i++) {
      var el = array[i];
      if(el instanceof Array) {
        for(var j=0; j<el.length; j++) {
          res.push(el[j]);
        }
      } else {
        res.push(el);
      }
    }
    return res;
  }

// while loop
var flatten = function (array){
    // TODO: Program me
   
    let a=0,
        d=[];
    while(a<array.length){
       d=d.concat(array[a])
       a+=1
    }
    return d
  }