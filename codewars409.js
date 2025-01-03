/*
Replace all items

Parameters or Edge Cases:
    1st input will be an array of elements and may be empty
    2nd input will be an integer representing the element to be targeted
    3rd input will be an integer representing the what to replace the targeted element with

Return:
    return the input array replacing all instances of the 2nd input with the 3rd input

Examples:
    [], 1, 2 --> []
    [1,2,2], 1, 2 --> [2,2,2]

Pseudocode:
    create a shallow copy array of the array seq and if the current element is equal to the 2nd input find then replace it with the 3rd input replace else return the current element

    1st issue reported was that 1st input that will always be an array can in fact be a string of chars, words, special characters and/or whitespace

    2nd issue is that if the 1st input is a string then the 3rd input replacing the targeted input must be converted to type string as well which is why the following regex answer does not work as it attempts to maintain the data integrity of the 3rd input

    Searching for the 3rd issue of which maybe replacing specific digits from multiple digit elements ie 17 replace 1 with 2 answer 27.

    function replaceAll(seq, find, replace) {
        if(typeof seq === "string"){
            const regexVar = new RegExp(find, 'g')
            return seq.replace(regexVar, replace)

        //return seq.replace(new RegExp(find, 'g'), replace)
    }

    What this does it allow variable names to be used inside regex in the targeted regex parameter as shown in the example above with the variable named find.

*/

// My Answer conditional returns based on type of 1st input being a string or an array
function replaceAll(seq, find, replace) {
    if(typeof seq === "string"){
        return seq.split('').map(e => e === find ? replace : e).join('')
    }
    if(Array.isArray(seq)){
        return seq.map(e => e === find ? replace : e)
    }  
}

// My Answer refactoring out the .map() for dry code
function replaceAll(seq, find, replace) {
    const toArr = x => x.map(e => e === find ? replace : e)
    if(typeof seq === "string"){
        return toArr(seq.split('')).join('')
    }
    if(Array.isArray(seq)){
        return toArr(seq)
    }  
}

// My Answer refactoring the toArr into default parameters
function replaceAll(seq, find, replace, toArr = x => x.map(e => e === find ? replace : e)) {
    if(typeof seq === "string"){
        return toArr(seq.split('')).join('')
    }
    if(Array.isArray(seq)){
        return toArr(seq)
    }  
}

// My Answer one liner arrow fn
const replaceAll = (seq, find, replace) => typeof seq === "string" ? seq.split('').map(e => e === find ? replace : e).join('') : seq.map(e => e === find ? replace : e)

// My Answer refactored one liner arrow fn ternary conditional with default fn in params
const replaceAll = (seq, find, replace, toArr = x => x.map(e => e === find ? replace : e)) => typeof seq === "string" ? toArr(seq.split('')).join('') : toArr(seq)

console.log(replaceAll([], 1, 2)) // []
console.log(replaceAll([1,2,2], 1, 2)) // [2,2,2]
console.log(replaceAll([ 1, 1, 2 ], 1, 2)) // [ 2, 2, 2 ]
console.log(replaceAll('Hello World', 'o', 0)) // 'Hell0 W0rld'

// Best Practices and Most Clever
// very clever to split on the targeted variable find and join on what to replace it with
function replaceAll(seq, find, replace) {
    return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
}

// Similar to my conditional statements but not using curly brackets for the return conditional statement
function replaceAll(seq, find, replace) {
    if (typeof seq === 'string') return seq.split('').map(x => x===find ? replace : x).join('');
    return seq.map(x => x===find ? replace : x);
}

// Brute force for loop pushing to an empty array
function replaceAll(seq, find, replace) {
    var res = [];
      for (var i=0; i<seq.length; i++){
        if (seq[i] == find) {
          res.push(replace);
        } else {
         res.push(seq[i]);
        }
      }
      if (typeof(seq) == 'string') {
        return res.join('');
      }  
      return res; 
}

// one liner arrow fn refactoring out the .map() prefixed by a conditional based on the 1st input being an array or not into a string with template literals
const replaceAll = (seq, find, replace) =>
    (val => Array.isArray(seq) ? val : val.join(``))
    ([...seq].map(val => val === find ? replace : val));

// same idea as above but easier to read code
function replaceAll(seq, find, replace) {
    return (Array.isArray(seq)  ? seq : seq.split('')).map(i => i === find ? replace : i)[Array.isArray(seq) ? 'valueOf' : 'join']('');
}