/*
LinkedList -> Array
Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}
Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]
Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

Parameters or Edge Cases:
    inputs will be an array of objects that can have nested objects as values
    values can be objects, integers, strings or booleans
Return:

Examples:
{value: 1, next: {value: 2, next: {value: 3, next: null}}} --> [1, 2, 3]
{value: "foo", next: {value: "bar", next: null}} --> ["foo", "bar"]

Pseudocode:
    JSON.stringify() the input 
    iterate through and grab every instance of ': ' to '}' that does not contain 'null' and push it to an empty array using .slice(indexOf(':') + 2, indexOf('))
    return that array

    alternate
    create a array of object values and if the value is an object then create a 
*/

// My Answer
function listToArray(obj) {
     let result = []
     let arr = Object.values(obj)
     while(typeof(e) === 'object'){

     }
    // const objCheck = n => typeof(n) === 'object' ? Object.values(n) : ''
    // return arr.map(e => typeof(e) === 'object' ? objCheck(e) : result.push(e))
}

console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}})) //
/*
declare an empty array result to push values to
if the current value type is a string boolean or an integer then push it to result
if the current value type is an object then while loop until the value is not an object and push it to result?
function strCount(obj){
    let temp = 0;
    JSON.stringify(obj,(key,value)=>{
        if (typeof value === 'string') {
            temp++
        }
        return value;
    })

    return temp
}
*/