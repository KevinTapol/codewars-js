/*
Dropcaps

Parameters or Edge Cases:
    inputs will be a string of word(s) with upper and lower case letters
    inputs will never be empty and contain at least one word

Return:
    return the input string but with words that are greater than 2 in length with their first letter capitalized and following letters lowercase leaving words that are length of 2 or less as they are from the input. *NOTE* Whitespace must be maintained as well.

Examples:
    'Apple Banana' --> "Apple Banana"
    'Apple' --> "Apple"
    '' --> ""
    'of' --> "of"
    'Revelation of the contents outraged American public opinion, and helped generate' --> "Revelation of The Contents Outraged American Public Opinion, And Helped Generate"
    'more  than    one space between words' --> "More  Than    One Space Between Words"
    '  leading spaces' --> "  Leading Spaces"
    'trailing spaces   ' --> "Trailing Spaces   "
    'ALL CAPS CRAZINESS' --> "All Caps Craziness"
    'rAnDoM CaPs CrAzInEsS' --> "Random Caps Craziness"

Pseudocode:
    split the incoming string on whitespace 
    create an array copy where if the current element's length is greater than 2 uppercase the first char and lowercase the rest else return the current element as is
    convert the array back into a string on whitespace
    return the new string

*/

// My Answer
function dropCap(n) {
    return n.split(' ').map(e => e.length > 2 ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e).join(' ')
}

// My Answer refactored one liner arrow fn
const dropCap = n => n.split(' ').map(e => e.length > 2 ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e).join(' ')

console.log(dropCap(' appLe  of banAna ')) // ' Apple  of Banana '

// Best Practices and Most Clever
function dropCap(n) {
    return n.replace(/\S{3,}/g, w => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase());
}

// using regex and replace to target all string words a-z that are greater than 2 in length uppercase the first char and lowercase the rest
const dropCap = n => n.replace(/\b([a-z])([a-z]{2,})/gi, (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase());

// using whitespace as a target for regex for chars whitespace followed by string of length 2
const dropCap = n => n.replace(/\b(\w)(\w{2,})/g, (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase());

// Brute force for loop
function dropCap(n) {
    n = n.split(' ');
    for(var i = 0; i < n.length; i++) {
      if(n[i].length > 2) {
        n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
      }
    }
    return n.join(' ');
}

// using .match() with regex to create an array of elements then .map() to alter them
const dropCap = $ => 
    $.match(/\s|[,]|\w*/g)
      .map(el => el.length > 2 && el !== '' ? (el[0].toUpperCase() + el.slice(1).toLowerCase()) : el)
        .join('')

// targeting by length 3 instead of greater than 2
const dropCap = n => n.replace(/\b[a-z]{3,}\b/gi, m => m[0].toUpperCase() + m.slice(1).toLowerCase());