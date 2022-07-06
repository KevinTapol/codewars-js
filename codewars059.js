// Parameters or Edge cases: don't worry about strings of length < 2
// Return: a string with the first and last characters of a string removed
// Examples:
// Psuedo code: turn into an array and remove first and last characters return to string

//my answer
function removeChar(str){
    let arr = str.split("")
    arr.pop()
    arr.shift()
    return arr.join('')
   
};
   
//best practices
function removeChar(str) {
    return str.slice(1, -1);
  }

//using .replace search params
const removeChar = (str) => str.replace(/^.|.$/g, '');

//another .replace but a different search param
const removeChar = (str) => str.replace(/^\w|\w$/g, '')

   
   
   