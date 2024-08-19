/*
Check three and two

Parameters or Edge Cases:
    inputs will be an array of 5 elements of chars

Return:
    boolean true if 3 of 5 of the chars are equal AND 2 of 5 of the chars are equal else false NOTE if they are all the same char then also return false

Examples:
    ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
    ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
    ["a", "a", "a", "a", "a"] ==> false // 5x "a"

Pseudocode:
    create a unique array of elements of the input
    create a filtered array copy of the elements and if the length of one array is either 3 or 2 and both lengths added together equal 5 then return true else false
    
*/

// My Answer
function checkThreeAndTwo(arr) {
    let  unique = [...new Set(arr)]
    let a1 = arr.filter(e => e === unique[0])
    let a2 = arr.filter(e => e === unique[1])
    if((a1.length === 2 || a1.length === 3) && a1.length + a2.length === 5){
        return true
    } else {
        return false
    }
}
// My Answer refactored
function checkThreeAndTwo(arr) {
    let  unique = [...new Set(arr)]
    let a1 = arr.filter(e => e === unique[0])
    let a2 = arr.filter(e => e === unique[1])
    return ((a1.length === 2 || a1.length === 3) && a1.length + a2.length === 5) ? true : false
}

// My Answer refactored arrow fn for practice
const checkThreeAndTwo = arr => {
    let  unique = [...new Set(arr)]
    let a1 = arr.filter(e => e === unique[0])
    let a2 = arr.filter(e => e === unique[1])
    return ((a1.length === 2 || a1.length === 3) && a1.length + a2.length === 5) ? true : false
}
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) // true
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"])) // false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])) // false

// Best Practices
// using .reduce() to create objects where the key is the string chars and the values are the total occurrence count of each string char. Then using .some() to check of there is a value that is 3 and if there is some value that is 2
function checkThreeAndTwo(array) {
    const counts = array.reduce((result, letter) => {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
      
      return result;
    }, {});
    
    const containsThree = Object.values(counts).some(x => x === 3);
    const containsTwo = Object.values(counts).some(x => x === 2);
    
    return containsThree && containsTwo;
}

// Most Clever
// creating array of elements then using multiple conditionals using boolean truthy falsy return
function checkThreeAndTwo(array) {
    var [a,b,c,d,e]=[...array].sort();
    return a!==e&&((a===b&&c===e)||(a===c&&d===e));
}

// Similar to my answer but change on the conditionals
function checkThreeAndTwo(array) {
    let as = array.filter(x =>x === 'a').length;
    let bs = array.filter(x =>x === 'b').length;
    let cs = array.filter(x =>x === 'c').length;
    return (as === 3 || bs === 3 || cs=== 3)  
            && (as === 2 || bs === 2 || cs === 2);
}

// brute force for loop with conditional count for each element
function checkThreeAndTwo(array) {
    var item1 = 0, item2 = 0, item3 = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'a') {
        item1++;
      } else if (array[i] === 'b') {
        item2++;
      } else if (array[i] === 'c') {
        item3++;
      }
    }
    return (item1 == 2 || item2 == 2 || item3 == 2) && (item1 == 3 || item2 == 3 || item3 == 3);
}

// using array methods to filter and compare lengths with .includes()
function checkThreeAndTwo(arr) {
    let res = [];
    res.push(arr.filter(x => x === 'a').length)
    res.push(arr.filter(x => x === 'b').length)
    res.push(arr.filter(x => x === 'c').length)
    return res.includes(2) && res.includes(3);
}

// clever one liner alternative to my answer of creating a unique array filtered by count and checking if that count is included in the prefixed array of [2, 3]
const checkThreeAndTwo = array =>
    [2, 3].includes(array.filter(val => val === array[0]).length) && new Set(array).size === 2;

// clean and legible step by step count of values compared with includes() for default boolean return
function checkThreeAndTwo(array) {
    let t = {a:0, b:0, c:0}
    let a = array.map(x => t[x]++)
    let y = Object.values(t)
    return y.includes(3) && y.includes(2)
}