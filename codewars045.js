// Parameters or Edge cases:
// Return: all numbers from a string then turn them into numbers
// Examples:  "hell5o wor6ld" -> 56
// Psuedo code: replace each instance of non 0-9 with empty string use object method Number to convert to int

//my answer CANNOT be lowercase d in /\D/g
function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ""));
}

//best practices
function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
  }

//using parseInt()
function getNumberFromString(s) {
    return parseInt(s.replace(/[^\d]+/g, ""), 10)
  }