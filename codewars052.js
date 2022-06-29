// Parameters or Edge cases: The character is a string of length 1 or an empty string. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!!
// Return:
// Examples: text before = "abc"
            //character   = "z"
            //text after  = "zzz"
// Psuedo code:

//my answer
function contamination(text, char){
    return text.replace(/./g, char);
  }

//best practices
function contamination(text, char){
    return char.repeat(text.length)
  }