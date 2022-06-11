// Parameters or Edge cases:
// Return: return string with no space
// Examples:
// Psuedo code: .split(" ")to create an array at the spaces then .join("") to turn it back into a string with no spaces

//my answer
function noSpace(x){
   return x.split(" ").join("")
}

//best practices
function noSpace(x){
    return x.replace(/\s/g, '');
  }

//.replace() returns a new string with some or all matches of a pattern replaced by a replacement. 