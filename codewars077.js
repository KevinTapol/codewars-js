// Parameters or Edge cases:input will never be an empty string
//                          1's replace nums >=5 , 0's replace nums <5
// Return: return a string of 0's and 1's 
// Examples:
// Psuedo code: turn into an array with .split("") NO SPACE so that each string has its own element
//              .map()through the array with a ternary x < 5 is true then set to 0 else 1
//              .join("") NO SPACE so that the elements are joined back into a string with no space 

//my answer and best practices
function fakeBin(string){
    return string.split("").map(x => x < 5 ? x = 0: x = 1).join("")
}

//most clever
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}