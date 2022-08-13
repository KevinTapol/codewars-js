// Parameters or Edge cases: Given a non-negative integer input will alwasy be vaild for 0 sheep return empty string
// Return: a string with input value as reptition string sheep
// Examples: 3 => "1 sheep...2 sheep...3 sheep..."
// Psuedo code:  using template literals declare string format equal to 1
//               for loop .concat the string using the input as end value starting at 2 
//               if input num is 0 return an empty string else return the looped concatenated string

// my answer
let countSheep = function (num){
    let string = `${1} sheep...`
    for(let i = 2; i <= num; i++){
        string = string.concat(`${i} sheep...`)
    }
    if(num == 0){
        return ""
    } else {
        return string
    }
}

// best practices they are declaring the array as empty from the start
var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
}

// most clever but it is not declaring the arrow fn with const
// keys() method returns a new Array Iterator object that contains the keys for each index in the array.
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

// interseting using an arrow function with += to concat
const countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
        val += `${i} sheep...`;
    }
    return val;
}

// arrow function array methods back to string
const countSheep = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

// using spread arrow fn array methods back to string
const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

// array methods with comments
function countSheep(num) {
    // 🐑 create an array where the given number is it's length, and each number is the length + 1
    const arr = Array.from({ length: num }, (v, i) => i + 1);
    
    // 'map' the array and 'join' to make it a string
    const countingString = arr.map((sheepCount) => `${sheepCount} sheep...`).join("");
    
    // return the string
    return countingString;
}
