/*
Numbers to Objects

Parameters or Edge Cases:
    inputs will be an array of integers
    input arrays will not be empty

Return:
    return an array of objects of each input element integer as the key and the charCode as its value

Examples:
    [118,117,120] --> [{'118':'v'}, {'117':'u'}, {'120':'x'}]
    [101,121,110,113,113,103] --> [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]

Pseudocode:
    declare an empty array named result
    iterate through the input array locally declare an empty object (This sets the object empty for each iteration.) named obj and set the key equal to the current element and the charCode of the current element as the value
    push the obj to the array result
    return the object result
*/

// My Answer
function numObj(s){
    let result = []
    for(let i = 0; i < s.length; i++){
        let obj = {}
        obj[s[i]] = String.fromCharCode(s[i])
        result.push(obj)
    }return result
}

// My Answer refactored .reduce()
function numObj(s){
    const result = s.reduce((acc, c) => {
        let obj = {}
        obj[c] = String.fromCharCode(c)
        acc.push(obj)
        return acc
    }, [])
    return result
}

// My Answer refactored one liner
const numObj = s => s.reduce((acc, c) => { let obj = {}; obj[c] = String.fromCharCode(c); acc.push(obj); return acc }, [])

console.log(numObj([118,117,120])) // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
console.log(numObj([101,121,110,113,113,103])) // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]

// Best Practices and Most Clever
// Note nested return statement needed for return {[key]: value} and the brackets for dynamic iteration of the key
function numObj(s){
    return s.map(n => {
      return { [n]: String.fromCharCode(n) };
    });
}

// Refactored Best Practices and Most Clever removing return and adding () instead
function numObj(s){
    return s.map(n =>  ({ [n]: String.fromCharCode(n) }))
}

// one liner of Best Practices and Most Clever
const numObj = ($) => $.map(el => ( {[el]: String.fromCodePoint(el)} ))

// Breaking up Best Practices and Most Clever into 2 separate arrow fn
const makeNumObj = (n) => ({ [n]: String.fromCharCode(n) });
const numObj = (arr) => arr.map(makeNumObj);

// .map() version of my .reduce()
function numObj(s){
    return s.map(n => {
      const obj = {};
      obj[n] = String.fromCharCode(n);
      return obj;
    });
}