// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Parameters or Edge cases: input strings will be lowercase, not contain numerals, have at least 2 letters, contain hyphens and spaces but not at the beginning or end of the string.
// Return: boolean true/false if first and last characters of inputs match
// Examples: NA
// Psuedo code:  take both characters at the first index and last index from both inputs
//               compare the inputs at first index and the inputs at last index
//               if they are equal return true else false

// my answer
function feast(beast, dish) {
    if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
        return true
    }else {
        return false
    }
}

// might as well arrow fn ternary 
const feast = (beast, dish) => (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true: false )

// best practices
// Completely forgot you can call character at index with solid brackets only. Since they are statements, they will return boolean implicitly. So no need for if else or a ternary.
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// most clever
// using .slice(-1) returns the last character of a string or array. I'm used to using negative values for slice to start from the end of the string or array but getting just the last character using slice() slipped my mind.
function feast(beast, dish) {
    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}

// the regex using an arrow fn and spread for inputs
const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

// using .startsWith() method that determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
//   .endsWith() same but end
function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}

// calling functions inside of functions
function feast(beast, dish) {
    return beast.first() + beast.last() == dish.first() + dish.last();
}

String.prototype.first = function() {    return this[0];}

String.prototype.last = function() {
    return this[this.length-1];
}