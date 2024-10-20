/*
Multiply Word in String
You are to write a function that takes a string as its first parameter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Parameters or Edge Cases:
    there will be 3 inputs 1st a string of words, 2nd an integer representing the index of the word in the string to be targeted and 3rd an integer representing the number of repetitions of the targeted word

Return:
    return the targeted string repeated the 3rd input times separated with '-' as a single string

Examples:
  "This is a string",3 ,5 --> "string-string-string-string-string", "The string is incorrect"

  "Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10 --> "that-that-that-that-that-that-that-that-that-that"

  "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1 --> "means"

  "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8 --> "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance"

  "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5 --> "around-around-around-around-around"


Pseudocode:
    convert the input str into an array
    grab the element at the 2nd input loc index value, add '-' to the end and .repeat() the new string 3rd input times
    remove the final '-' from the new string
    return the result
*/

// My Answer
function modifyMultiply (str,index,times) {
    let word = str.split(' ')[index] + '-'
    let result = word.repeat(times).slice(0, -1)
    return result
} 

// My Answer refactored
function modifyMultiply (str,i,x) {
    return (str.split(' ')[i] + '-').repeat(x).slice(0, -1)
} 

// My Answer refactored one liner arrow fn 
const modifyMultiply = (str,i,x) => (str.split(' ')[i] + '-').repeat(x).slice(0, -1)

console.log(modifyMultiply("This is a string",3 ,5)) // "string-string-string-string-string"

// Best Practices and Most Clever
// create an empty array the length of the 3rd input and fill it with the targeted string with a whitespace. Then convert the array into a single string delineated by '-'
function modifyMultiply(str,i,n) {
    return Array(n).fill(str.split(' ')[i]).join('-');
} 

// Brute force for loop concatenating strings
function modifyMultiply (str, loc, num) {
    var arr = str.split(' ');
    var word = arr[loc];
    var newStr = '';
    for (var i = 0; i < num; i++) {
    newStr += word + '-';
    }
    return newStr.slice(0, newStr.length - 1);
}

// Brute force for loop with array methods
function modifyMultiply (str,loc,num) {
    let arr = str.split(' ')
    let res = []
    let strres =  ""
    for (i =0; i<num; i++){
     res.push(arr[loc]);
     strres = res.join('-');
    }
    return strres
}