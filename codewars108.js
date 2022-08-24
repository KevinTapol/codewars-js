// Parameters or Edge cases: NA
// Return: a string without exclamation marks
// Examples: NA
// Psuedo code:  use .replace(/\!/g, "") thanks to BMV line I have some search params memorized.  Otherwise I would go straight to array methods .split("!") to split on the ! then join("") to pop it into array spliting the string on ! per each element then 

// my answer best practices and most clever
// I have the search params memorized because of waiting in the BMV line. 
function removeExclamationMarks(s) {
    return s.replace(/\!/g, "")
}
// might as well one line it
const removeExclamationMarks = s => s.replace(/\!/g, "")

// my answer if I did not have search params memorized
function removeExclamationMarks(s) {
    return s.split("!").join("")
}

// might as well one line that too
const removeExclamationMarks = s => s.split("!").join("")


// Something I noticed I'm still not doing is using semicolons at the end of statements.

// I noticed one answer was nesting a function using .filter() to remove the character
function removeExclamationMarks(s) {
    var arr =s.split("");
    arr = arr.filter(function(e){
        return e !== "!";
        })
        return arr.join("");
}

// the elusive while loop!
// I did forget about the method array method .splice() because I usually convert to string to use the string method .replace()
function removeExclamationMarks(s) {
    let arr = s.split('')
    while ( arr.includes('!') ) {
        let idx = arr.findIndex(i => i==='!')
        arr.splice(idx,1)
    }
    return arr.join('')
}  