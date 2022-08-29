// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Parameters or Edge cases: input will be a string
// Return: a string with each character repeated once (must be case sensative)
// Examples: * "String"      -> "SSttrriinngg"
//           * "Hello World" -> "HHeelllloo  WWoorrlldd"
//           * "1234!_ "     -> "11223344!!__  "
// Psuedo code:  convert to an array with .split("") so that each character has its own index
//               then create a new array with .map() and .concat each element to itself
//               then .join() again to return to a string 
//               return the new string
// might as well 1 line this into an arrow fn

// my answer
function doubleChar(str) {
    return str.split("").map(word => word.concat(word)).join("")
}

// same asnwer just using arrow function
// very funny best pracitices only difference is using + to concat
const doubleChar = str => str.split("").map(word => word.concat(word)).join("")

// best practices
const doubleChar = (str) => str.split("").map(c => c + c).join("");

// most clever
// something to memorize in the next BMV line
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}

// similar answer to most clever
function doubleChar(str) {
    return str.replace(/./g, '$&$&');
}

// IMO best practices because of comments and easy to read
function doubleChar(str) {    
    // lets first declare our string
    var newString = "";
    
    // Iterate through the string adding the current character twice
    for(var current = 0; current < str.length; current++){
        newString += str[current] + str[current]; 
    }
    // return our new string 
    return newString  
}


// for loop same as above but not using +=
function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
        word = word + str[i] + str[i];
    };
    return word;
};

// using array brackets IMMEDIATELY with spread
// I didn't know you could circumvent (...string).toArray() with [...string]
function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
}

// The call() method calls the function with a given this value and arguments provided individually.
function doubleChar(str) {
    return Array.prototype.map.call(str, char => char + char).join('');
}

// using a for loop with .push()
function doubleChar(str) {
    const array = str.split("");
    const doubleArray = []
    for (element of array) {
        doubleArray.push(element + element)
    }
    return doubleArray.join("");
}

// using .repeat()
function doubleChar(str) {
    return str.split("").map(x => x.repeat(2)).join("");
}