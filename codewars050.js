// Parameters or Edge cases:
// Return: a string with no excalamation marks except for last character
// Examples:
// Psuedo code: convert string to array replace '!' with '' push('!') return to string


//my answer
function remove(s) {
    return s.replace(/!+/g, '') + '!';
}

//best practices
const remove = s => s.replace(/!+/g, "")+"!";

//template literals
const remove = s => 
  `${s.replace(/!/g, ``)}!`;