/*
Combine objects

Parameters or Edge Cases:
    do not mutate the original inputs
    objects may be empty
    inputs will be 2 or more objects with keys as lowercase letters starting from a-z and values of integers greater than or equal to 0

Return:
    a single object that adds up all the values of the same keys of the input objects

Examples:
    { a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 } --> { a: 13, b: 20, c: 36, d: 3 }
    { a: 10, b: 20, c: 30 }, { a: 5, d: 11, e: 8 } --> { a: 15, b: 20, c: 30, d: 11, e: 8 }
    { a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 5, d: 11, e: 8 } -->  { a: 18, b: 20, c: 36, d: 14, e: 8 }

Pseudocode:
   create an array of the varied number of objects by using a spread operator on the input argument
   this will create an array where each object passed in is an element regardless of how many objects are passed in
   use .reduce() where the default value is an empty object .reduce((acc,c) => {acc + c},{})
   if the key already exists, then add up the value and add it to the default object
   if the key doesn't exist, then add the key to the default value
   return the new object
    
*/ 

// My Answer
 function combine(...inputs) {
    return inputs.reduce((acc, c) => {
        for (let i in c) {
            acc[i] = i in acc ? acc[i] + c[i] : c[i] 
        } return acc
    }, {})
}

console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 })) // { a: 13, b: 20, c: 36, d: 3 }
console.log(combine({ a: 10, b: 20, c: 30 }, { a: 5, d: 11, e: 8 })) // { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 5, d: 11, e: 8 })) // { a: 18, b: 20, c: 36, d: 14, e: 8 }

// Best Practices
// declare empty obj, for loop through and assign key value pairs
function combine() {
    var obj = {}
  
    for (var i = 0; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
          }
    }
  
    return obj;
}

// Most Clever
// Cleaner one liner version of my answer
const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
}, {});

// similar to most clever but using Object.keys() and .forEach()
const combine = (...args) => args.reduce((pre, val) => (Object.keys(val).forEach(v => pre[v] = (pre[v] || 0) + val[v]), pre), {});

// Brute force for loop with default return using .concat() and spread operator
function combine(...obj) {
    let objArr = [].concat(...obj)
    let finalObj = {}
    objArr.forEach(object => { 
      for(key in object){
        if(finalObj[key]) finalObj[key] = finalObj[key] + object[key] 
        else finalObj[key] = object[key] 
      }
    })
    return finalObj  
  }

// Dividing the function into 3 separate functions 1st being the function of .reduce(), 2nd using Object.entries() while calling the 1st and the final using spread operator  and calling the 2nd on the inputs
const objKeyReducer = (res, [key, val]) => (res[key] = (res[key] || 0) + val, res);
const objReducer = (res, obj) => Object.entries(obj).reduce(objKeyReducer, res);
const combine = (...objs) => objs.reduce(objReducer, {});

// declaring an empty object, for loop iteration and also accounting for undefined
function combine(){
    var final = {}; 
    for(var _arg in arguments){ 
      for(var _property in arguments[_arg]){
        final[_property]===undefined?
          final[_property]=arguments[_arg][_property]:
          final[_property]+=arguments[_arg][_property];
      }
     }
     return final;
   }

// clever while loop with a spread operator on the input arguments
function combine(...rest) {
    const result = {};
    
    while (rest.length) {
      const obj = rest.pop();
      for (const key in obj) {
        if (result[key]) {
          result[key] += obj[key]
        } else {
          result[key] = obj[key]
        }
      }
    }
    
    return result;
  }

// Similar to Most Clever but very clean and easy to read
function combine(...objects) {
    // Your code here
      const mergedObj = {}; 
   
    objects.forEach(obj => { 
      Object 
        .keys(obj) 
        .forEach(key => { 
          mergedObj[key] = (mergedObj[key] || 0) + obj[key]; 
        }); 
    }); 
   
    return mergedObj; 
    
  }