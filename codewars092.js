// Parameters or Edge cases:
// Return: a string of words in reversed order. Do Not reverse the individual words! Only the order in which they come.
// Examples: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// Psuedo code: convert the string to array with .split(' ') creating elements at each space between words
//              .reverse() the array 
//              .join(' ') the array back into a string separating each word with a space
//              return the reverse string

// my answer, best practices and most clever
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

// using a for loop to create a new array and push() each word instead of .reverse()
function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
        reverse.push(words[i]);
    }
    return reverse.join(" ")
}