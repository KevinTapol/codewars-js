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
    declare an empty array name result to push the values that are not null to
    loop through the input object and while the object is not null push the value of the object
        set the next input using the input object with .next
    outside of the while loop return the array result

    thinking of a way to do it with .reduce() .map() with obj.next
*/

// My Answer
function listToArray(obj) {
    let result = [];
    
    while (obj !== null) {
      result.push(obj.value);
      obj = obj.next;
    }
    return result;
}

console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}})) //

// Best Practices and Most Clever
// clever use of for loop start is input obj for loop based on element start is input obj stop on e and increment on e.next. Each iteration pushes the value of the current element. Finally return the result
function listToArray(obj) {
    let array = [];
    for (let e = obj; e; e = e.next)
      array.push(e.value);
    return array;
}

// using recursion with .next
function listToArray(obj) {
    return !obj ? [] : [obj.value].concat(listToArray(obj.next));
}

// Similar to best practices and most clever but specifying not null on the for loop stop
function listToArray(list) {
    for (var array = []; list !== null; list = list.next)
      array.push(list.value);
    return array;
} 

// using do while Note first action is done then next is conditional
function listToArray(list) {
    let res = [];
    do {
      res.push(list.value);
    } while (list = list.next);
    return res;
}