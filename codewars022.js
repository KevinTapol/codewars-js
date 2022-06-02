// Parameters or Edge cases:
// Return: number
// Examples: "1234" --> 1234 "605"  --> 605 "1405" --> 1405 "-7" --> -7
// Psuedo code: Number() constructor creates a Number object.
                //parseInt()function parses a string argument and returns an integer of the specified radix
                //+ operator returns the numeric representation of the object

//my answer
const stringToNumber = function(str){
    // put your code here
    str = Number(str)
    return str;
  }

//best practices
var stringToNumber = function(str){
    return parseInt(str);
  }

//rated most clever
var stringToNumber = function(str){
    return +str;
  }