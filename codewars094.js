// Parameters or Edge cases: there should be no spaces at the beginning or end of the sentence
// Return: return a sentence in string format from an array of strings
// Examples: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// Psuedo code: .join(' ') to join each element with a space as a separator

// my answer best practices and most clever
function smash (words) {
    return words.join(' ')
};

// using .reduce() to concat
const smash = words => words.length == 0 ? "" : words.reduce((x, y) => x + " " + y)

// using the .toString() to convert the array to string which forces commas then replace each comma with a space
function smash (words) {
    let tostring = words.toString();
    return tostring.replace(/,/g, ' ')
};

// using spread
function smash (words) {
    "use strict";
    return [...words].join(' ');    
};

// using a for loop to add a space and each element
function smash (words) {
    "use strict";
    var smashed = '';
    for(var i = 0; i<words.length; i++) {
        smashed += words[i];
        if(i!=words.length-1) {
        smashed += ' ';
        }
    }
    return smashed;
};