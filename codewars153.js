// Parameters or Edge Cases: parameters will be an array
// Return: a list with the reverse order.
// Examples:  [1, 2, 3, 4]  -> [4, 3, 2, 1]
//            [9, 2, 0, 7]  -> [7, 0, 2, 9] 
// Psuedo Code: .reverse() is an array method to reverse the array

// my answer and best practices
function reverseList(list) {
    return list.reverse()
}

// my answer arrow fn and most clever
const reverseList = (list) => list.reverse()

// for loop
function reverseList(list) {
    var array = [];
    for (var i = list.length-1; i >= 0; i --){
        array.push(list[i]);
    }
    return array;
}

// using spread and a ternary to return an empty array if the array is undefined
const reverseList = ([h, ...t]) => h == undefined ? [] : [...reverseList(t), h];

// using .reduce()
function reverseList(list) {
    return list.reduce((reverseList, element) => [element, ...reverseList], []);
}

// using .map() and unshift
function reverseList(list) {
    var arr = [];
    list.map(function(x){
        arr.unshift(x);
    })
    return arr;
}