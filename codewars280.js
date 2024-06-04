/*
Char Code Calculation

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

Parameters or Edge Cases:
    inputs will be a string of characters of case sensitive characters from A - z ascii 65 - 122
Return:
    an integer representing the difference between the sum of the ascii code characters of the input string and the ascii code characters of the input string where 7 is replaced with 1
Examples:
    'abcdef' --> 6
    'ifkhchlhfd' --> 6 
    'aaaaaddddr' --> 30 
    'jfmgklf8hglbe' --> 6  
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' --> 96

Pseudocode:
    declare a new variable called arr and set it equal to the input string into an array where each character is an element converted to it's ascii charCodeAt(index) where index = 0
    declare a new variable called str and set it equal to the array of integers back into a string of integers
    convert the string of integers back into an array where each element is only 1 integer
    filter through the array and grab only the elements equal to '7'
    return the length of the filtered array multiplied by 6
    

*/
//console.log('z'.charCodeAt(0))

// My Answer
function calc(x){
    let count = 0
    let arr = x.split('').map(e => e = e.charCodeAt(0))
    let str = arr.join('')
    return str.split('').filter(e => e === '7' ).length * 6
}

// My Answer refactored
function calc(x) {
    return x.split('').map(e => e = e.charCodeAt(0)).join('').split('').filter(e => e === '7').length * 6
}

// My Answer One Liner Arrow fn
const calc = x => x.split('').map(e => e = e.charCodeAt(0)).join('').split('').filter(e => e === '7').length * 6

console.log(calc('abcdef')) // 6
console.log(calc('ifkhchlhfd')) // 6
console.log(calc('aaaaaddddr')) // 30
console.log(calc('jfmgklf8hglbe')) // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')) // 96

// Best Practices
/*
Declaring a function called sum that is an altered .reduce() using + to convert from string to int instead of Number() or parseInt(). 
Then declaring a new variable total1 that is using .replace(), regex and .charCodeAt() to replace each element with it's ascii integer equivalent.
Then declaring a new variable total2 that is using .replace() and regex to replace every occurrence of '7' with '1' in total1.
Finally, passing total1 and total2 into the function sum() and returning the difference. 
*/
function calc(x){
    let sum = n => [...n].reduce((a,b) => +a + +b);
    let total1 = x.replace(/./g, x => x.charCodeAt(0));
    let total2 = total1.replace(/7/g,'1');
    return sum(total1) - sum(total2);
}

// Most Clever
// Very similar to my refactored except they are using .replace() and .match() with regex
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6 

// Similar to Most Clever but replacing everything that is NOT 7 with an empty string
const calc = x => x.replace(/./g, val => val.charCodeAt()).replace(/[^7]/g, ``).length * 6;

// Similar to Best Practices but not declaring a sum function separately
const calc = x => {
    let total1 = [...x].map(i => i.charCodeAt()).join``
    let total2 = total1.replace(/7/g, 1)
    
    return [...total1].reduce((a,b)=>a+ +b,0) - [...total2].reduce((a,b)=>a+ +b,0)
  }

// Brute force for loop adding 6 to a declared variable
function calc(x){
    let str = ''
    let result = 0
    for(let i = 0; i < x.length; i++) {
      str += String(x.charCodeAt(i))
    }
    for(let i = 0; i < str.length; i++) {
      if (str[i] === '7') {
        result += 6
      }
    }
    return result
  }