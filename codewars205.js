// Parameters or Edge Cases:
//      input will be an array of strings of varying length
// Return:
//      the array with strings assorted by length from smallest to largest
// Examples:
//      describe("Example tests",function(){
//          it("Test 1",function(){
//            Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
//          });
//          it("Test 2",function(){
//            Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
//          });
//          it("Test 3",function(){
//            Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
//          });
//      });
// Psuedo Code:
//      take in the array and sort the strings by the integer length value 

// my answer best practices and most clever
function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    // take in the array and sort the strings by the integer length value
    return array.sort((a,b)=> a.length - b.length)
}

console.log(sortByLength(["Beg", "Life", "I", "To"])) // ["I", "To", "Beg", "Life"]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])) // ["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Longer", "Longest", "Short"])) // ["Short", "Longer", "Longest"]

// my answer refactored
const sortByLength = (array) => array.sort((a,b)=>a.length - b.length)

// for loop with .map() array methods and conditionals
"use strict"
function compareNumeric(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
}

function sortByLength (array) {
	let arrayL = array.map((value) => {
		return value.length;
	})
	arrayL = arrayL.sort(compareNumeric);
	let resArr = arrayL.map((value) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i].length === value) {
				return array[i];
			}
		}
	})
	return resArr;
};

// nested for loops
function sortByLength(array) {
    let sorted = [];
    
    for (let i = 0; true; i++) {
      for (let j = 0; j < array.length; j++) {
        let string = array[j];
        
        if (string.length === i) {
          sorted.push(string);
        }

        if (sorted.length === array.length) {
            return sorted;
        }
      }
    }
}

// using JSON methods
// The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
function sortByLength(a) {
    return JSON.parse(JSON.stringify(a)).sort((a, b) => a.length - b.length);
}

// another nested for loop
function sortByLength (array) {
    let res = [];
    let i = 0;
    let j = 0;
    let sorted = array.map(el => el.length).sort((a, b) => a - b);
    for (let i in sorted) {
      for (let j in array) {
        if (sorted[i] == array[j].length) {
          res.push(array[j]);
        }
      }
    }
    return res;
}

// another nested for loop but the inner conditional of the nested for loop is comparing the parent for loop iteration to the inner for loop iteration length
function sortByLength (array) {
    let res = [];
    let i = 0;
    let j = 0;
    let sorted = array.map(el => el.length).sort((a, b) => a - b);
    for (let i of sorted) {
      for (let j of array) {
        if (i == j.length) {
          res.push(j);
        }
      }
    }
    return res;
}