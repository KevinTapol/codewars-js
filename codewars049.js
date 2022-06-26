// Parameters or Edge cases:
// Return: a string combining 2 strings with 'are' between them
// Examples:
// Psuedo code: concat() with 'are'

//my answer
var TempleStrings = function(obj, feature) {
    return obj.concat(' are ',feature)
  }

//best practices
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
  }

//arrow function 1 liner
let TempleStrings = (obj, feature) => `${obj} are ${feature}`;