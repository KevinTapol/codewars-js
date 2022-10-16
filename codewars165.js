// Parameters or Edge Cases:
//          input can contain any character
//          input can be uppercase and lowercase
// Return: 
//          a boolean true if a string has the same amount of 'x's and 'o's else false
// Examples:
//          XO("ooxx") => true
//          XO("xooxx") => false
//          XO("ooxXm") => true
//          XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//          XO("zzoo") => false
// Psuedo Code: 
//          use .toLowerCase() to lowercase all the characters
//          use .split('') to convert the string to an array with each character in its own index
//          use .filter() to create a shallow array copy of all the 'x' and another for the 'o' 
//          use .length to count the number of elements in each shallow array copy
//          compare the lengths and return true if they are equal else false

// my answer
function XO(str) {
    return str.toLowerCase().split('').filter(e => e === 'x').length === str.toLowerCase().split('').filter(e => e === 'o').length
}

// my answer arrow fn very similar to 2nd best practices
const XO = (str) => str.toLowerCase().split('').filter(e => e === 'x').length === str.toLowerCase().split('').filter(e => e === 'o').length

// best practices and most clever is regex
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

// Very Clever and not using regex
// split on the string characters x and o then compare the array lengths
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// for loop
// loop through and add 1 to each instance where the index character is 'x' and subtract 1 for 'o'
function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}

// using .replace() and regex
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

// I didn't realize you can use a comma with a return statement for a regular function
function XO(str) {
    return str=str.toLowerCase(), str.split("o").length == str.split("x").length
}