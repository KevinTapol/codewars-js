// Parameters or Edge Cases:
//      inputs will be a string of characters
//      can they have special characters !? <> or numbers?
//      what about capitalization? Do you want to accept an Upper Case character as it's lowercase or error it?
//      The string has a length greater or equal to one and contains only letters from ato z.
// Return:
//      a string fraction where the numerator is the interger representation of occurances that the input string characters were not a to m ie the error rate of the printer and the denominator the length of the input string
// Examples:
//      s="aaabbbbhaijjjm"
//      printer_error(s) => "0/14"
//      
//      s="aaaxbbbbyyhwawiwjjjwwm"
//      printer_error(s) => "8/22"
//      describe("printerError",function() {
//          it("Basic tests",function() {   
//              var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//              Test.assertEquals(printerError(s), "3/56")
//      })})
// Psuedo Code:
//      not using regex 
//      take in the string and convert it to an array where each character is an element in the array
//      use .filter() and create a new array with only the characters that are not a-m by comparing the value of each element greater than string m
//      return the string fraction where the numerator is the length of the new array followed by / and the denominator is the length of the original string

//      using regex
//      take in the string and replace every instace of a-m with an empty string 
//      return the length of the replaced string as a numerator and the original string length as the denominator

// my answer without regex
function printerError(s) {
    let arr = s.split('').filter(e => e > 'm')
    return `${arr.length}/${s.length}`
}

// my answer without regex arrow function
const printerError = (s) => `${s.split('').filter(e => e > 'm').length}/${s.length}`

// my answer with regex
function printerError(s) {
    let arr = s.replace(/[a-m]/gi, "")
    return `${arr.length}/${s.length}`
}
// my answer with regex arrow function
const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`

console.log(printerError("aaabbbbhaijjjm"))
// result "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
// result "8/22"
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
// result "3/56"

// best practices
// they declared a global variable to count the number of times the value of the string characters were greater than m
function printerError(s) {
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

// most clever
// the only differnce I see with my arrow function regex answer is not including parathesis around the input declaration
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;


// brute force answer using global variables, a for loop and conditional statements
function printerError(s) {
    var x = 0; 
    var y = 0; 
    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i).includes("n")){
        x++;
        y++;
      } else if (s.charAt(i).includes("o")){
        x++;
        y++;
      } else if (s.charAt(i).includes("p")){
        x++;
        y++;
      } else if (s.charAt(i).includes("q")){
        x++;
        y++;
      } else if (s.charAt(i).includes("r")){
        x++;
        y++;
      } else if (s.charAt(i).includes("s")){
        x++;
        y++;
      } else if (s.charAt(i).includes("t")){
        x++;
        y++;
      } else if (s.charAt(i).includes("u")){
        x++;
        y++;
      } else if (s.charAt(i).includes("v")){
        x++;
        y++;
      } else if (s.charAt(i).includes("w")){
        x++;
        y++;
      } else if (s.charAt(i).includes("x")){
        x++;
        y++;
      } else if (s.charAt(i).includes("y")){
        x++;
        y++;
      } else if (s.charAt(i).includes("z")){
        x++;
        y++;
      } else {
        y++;
      }
    } 
    var xString = x.toString();
    var yString = y.toString();
    var fraction = "/";
   return xString + fraction + yString;
}

// using .match() converting to an array of regex instead of .replace() with regex 
// then converting back into a string using .join('/') 
const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

// same as above but using + instead of .join()
var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

// I didn't know you could also use ig intead of gi for regex inclusive search parameters
function printerError(s) {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}

// I love it using .charCodeAt() for specific character value representation for alphabet characters
function printerError(s) {
    var m = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
        m++;
      }
    }
    return m + '/' + s.length;
}

// using .forEach()
// declaring a global string for comparison
// using .indexOf() if the character does not exist it returns a -1 
function printerError(s) {
    var allowed = 'abcdefghijklm';
    var error = 0;
  
    s.split('').forEach( function( item ) {
      return ( allowed.indexOf( item ) === -1 ) ? error++ : '';
    });
    
    return error + '/' + s.length;
}