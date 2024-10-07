/*
Double Sort

Parameters or Edge Cases:
    inputs will be arrays of elements of numbers and/or strings
    strings and numbers may be more than one char length
    strings may be uppercase or lowercase and treated as such
    numbers may be written as strings and should be treated as strings
    inputs will never be an empty array

Return:
    return a sorted array of all the numbers sorted in ascending order followed by strings sorted in alphabetic order including numbers written as strings

Examples:
    [6, 2, 3, 4, 5] --> [2, 3, 4, 5, 6]
    [14, 32, 3, 5, 5] --> [3, 5, 5, 14, 32]
    [1, 2, 3, 4, 5] --> [1, 2, 3, 4, 5]
    ["Banana", "Orange", "Apple", "Mango", 0, 2, 2] --> [0,2,2,"Apple","Banana","Mango","Orange"]
    ["C", "W", "W", "W", 1, 2, 0] --> [0,1,2,"C","W","W","W"]
    ["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"] --> [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']

Pseudocode:
    create a filtered copy of the input array filtering only number types and sort them in ascending order
    repeat the process but with type strings
    concat the string array to the number array and return the new array

*/

// My Answer and Best Practices
// IMO Declared variables of inputs then using those variables are easier to use and read.
function dbSort(a){
    let numArr = a.filter(e => typeof(e) === 'number').sort((a, b) => a - b)
    let strArr = a.filter(e => typeof(e) === 'string').sort()
    return numArr.concat(strArr)
}

// My Answer refactored
function dbSort(a){
    return a.filter(e => typeof(e) === 'number').sort((a, b) => a - b).concat(a.filter(e => typeof(e) === 'string').sort())
}

// My Answer refactored one liner arrow fn
const dbSort = a => a.filter(e => typeof(e) === 'number').sort((a, b) => a - b).concat(a.filter(e => typeof(e) === 'string').sort())

console.log(dbSort([14, 32, 3, 5, 5])) // [3, 5, 5, 14, 32]
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])) // [0,2,2,"Apple","Banana","Mango","Orange"]
console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"])) // [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']

// Most Clever
/*
array.sort((a,b)=>!a.split-!b.split||a<b||-1) This just uses an OR statement to first sort into strings and numbers and then to sort each individually. !a.split-!b.split - if the type (string or number) of a and b is the same, the values of a and b will be coerced into 1-1 or 0-0. Both are false, so the next part of the OR 'a<b||-1' will be evaluated and a conventional sort takes place. If the type were different we would have 1-0 or 0-1 which would result in the numbers being separated (sorted) from the strings. As this value is truthy, the next part of the OR is not evaluated. In the conventional sort 'a<b||-1', if a is less then b, this will be coerced to 1 (true) and the last part of the OR is not evaluated. If a is not less than b, the last part of the OR is evaluated and -1 is returned.
*/
dbSort=emc2=>emc2.sort((proton,neutron)=>!neutron.split-!proton.split||neutron<proton||-1);

// clever use of || or for a > b or a < b comparisons
const dbSort = array => array.sort((a, b) => (typeof(a) == 'string') - (typeof(b) == 'string') || (a > b) - (a < b));

// clever use of + for type switching numbers to strings if only they are numbers represented as strings
const dbSort = a => a.sort((a, b) => (b === +b) - (a === +a) || b < a || -1);

// Brute force for loop
function dbSort(a) {
    let arrOfNumber = []
    let arrOfString = []
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === 'number'){
            arrOfNumber.push(a[i])
        }else{
            arrOfString.push(a[i])
        }
    }
    return arrOfNumber.sort((a, b) => a - b).concat(arrOfString.sort((a, b) => a.localeCompare(b)))
}

// switch case instead of if else
function dbSort(a){
    return a.sort((a,b) => {
      switch(true){
          case typeof(a) == 'number' && typeof(b) == 'number':
            return a - b;
          case typeof(a) == 'number' && typeof(b) == 'string':
            return -1;
          case typeof(a) == 'string' && typeof(b) == 'number':
            return 1;
          default:
            return a.localeCompare(b);
      }
    })
}