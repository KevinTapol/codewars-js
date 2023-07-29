// Love vs friendship
/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be 1 word strings of lowercase letters
    inputs will never be empty or null 
*/ 

// Return:
/*
    the integer sum of each letter in a word where a = 1, b = 2, ... z = 26
*/ 

// Examples:
/*
    "attitude" => 100
    "friends" => 75
    "family" => 66
    "selfness" => 99
    "knowledge" => 96
*/ 

// Pseudocode:
/*
    // declare an empty integer named result and set it equal to 0
    // iterate through the input string and for each element get the charCode integer equivalent subtract it by 96 and add the result to result
    // return result
*/ 

// my answer
function wordsToMarks(string){
    // declare an empty integer named result and set it equal to 0
    let result = 0
    // iterate through the input string and for each element get the charCode integer equivalent subtract it by 96 and add the result to result
    for (let i = 0; i < string.length; i++){
        result += (string.charCodeAt(i) -96)
    }
    // return result
    return result
}
// my answer refactored using array methods
function wordsToMarks(string){
    // convert the string into an element of each character 
    // create an array copy where each character is the charCodeAt() -96
    // sum the array
    return string.split('').map(e => e.charCodeAt() -96).reduce((acc,c) => acc+c,0)
}
// my answer refactored arrow fn implicit return Codewars Only
const wordsToMarks = (string) => string.split('').map(e => e.charCodeAt() -96).reduce((acc,c) => acc+c,0)

console.log(wordsToMarks("attitude")) // 100
console.log(wordsToMarks("friends")) // 75
console.log(wordsToMarks("family")) // 66
console.log(wordsToMarks("selfness")) // 99
console.log(wordsToMarks("knowledge")) // 96

// best practices and most clever
// very similar to my refactored for CODEWARS ONLY answer
// They used array brackets with a spread operator instead of .split('') to create an array of each string character.
// Very clever to use the current element's charCodeAt() -96 inside .reduce() instead of creating a shallow array copy.
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

// they made a string of the alphabet using index location + 1
function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
      marks += alphabet.indexOf(char) + 1;
    });
    return marks;
}

// clever use of first index being 0 then each additional being index value
const wordsToMarks = (abc) =>  [0,...abc].reduce(($, b) => $ + ' abcdefghijklmnopqrstuvwxyz'.indexOf(b))

// very similar to my refactored answer but using [...string] instead of .split('')
function wordsToMarks(string){
    return [...string].map(e => e.charCodeAt(0)-96).reduce((a,b) => a+b);
}

// creating an array instead of a string for index reference of each character
function wordsToMarks(str){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return [...str].reduce((sum,letter)=> (sum += (alphabet.indexOf(letter) + 1),sum),0)
  }