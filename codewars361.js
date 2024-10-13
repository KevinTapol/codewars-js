/*
Scrolling Text

Parameters or Edge Cases:
    inputs will be strings

Return:
    return an array of elements of the input string capitalized where each char is rotated one index pushing the last char to the front until reaching the original string

Examples:
    "abc" --> ["ABC","BCA","CAB"]
    "codewars" -->
    [ "CODEWARS",
      "ODEWARSC",
      "DEWARSCO",
      "EWARSCOD",
      "WARSCODE",
      "ARSCODEW"
      "RSCODEWA",
      "SCODEWAR" 
    ]

Pseudocode:
    declare an empty array
    iterate the length of the input string upper cased slicing from the current index to the length of the string concatenated with slicing from 0 to the current index and push the resulting string to the empty array
    return the array
*/

// My Answer
function scrollingText(text){
    let result = []
    for(let i = 0; i < text.length; i++){
        let e = text.toUpperCase().slice(i, text.length) // 'abc' 'bc' 'c'
        let d = text.toUpperCase().slice(0, i) // '' 'a' 'ab'
        result.push(e + d)
    }return result
}

// My Answer refactored 
function scrollingText(text){
    let result = []
    let str = text.toUpperCase()
    for(let i = 0; i < text.length; i++){
        result.push(str.slice(i, text.length) + str.slice(0, i))
    }return result
}

console.log(scrollingText("abc")) // ["ABC","BCA","CAB"]

// Best Practices 
// similar to my answer but removing the 2nd param from the first .slice() and putting the .toUpperCase() on the end 
function scrollingText(text){
    let result = []
    
    for( var i = 0; i < text.length; i++){
      result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
    }
    
    return result
}

// Most Clever
// creating an array for each char then slicing the string
function scrollingText(text){
    text = text.toUpperCase();
  
    return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}

// Array.from({length: n}, arrow fn)
const scrollingText = (text) =>{
    let word = text[text.length-1].toUpperCase() + text.toUpperCase().slice(0, text.length-1)
    return Array.from({length:text.length}, x => word = word.slice(1) + word[0])
}

// using string interpolation `${}`
const scrollingText = text => [...text].map((_, idx) => `${text.slice(idx)}${text.slice(0, idx)}`.toUpperCase());

// using .substring() instead of .slice()
const scrollingText = (text) => {
    const arr = [];
    for (let i = 0; i < text.length; i++)
        arr.push(text.substring(i, text.length).toUpperCase() + text.substring(0, i).toUpperCase());
    return arr;
}