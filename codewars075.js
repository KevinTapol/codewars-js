// Parameters or Edge cases:
// Return: a string to uppercase
// Examples:
// Psuedo code: use method .toUpperCase()

//my answer and best practices
function makeUpperCase(str) {
   return str.toUpperCase()
}

//most clever
function makeUpperCase(str) {
    return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
  }