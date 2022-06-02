//Write a function to split a string and convert it into an array of words.
// Parameters or Edge cases: string to array
// Return: array of words
// Examples:"Robin Singh" ==> ["Robin", "Singh"]
//           "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// Psuedo code: make sure input is string .tostring() not needed .split() turns it into an array
function stringToArray(string) {
    return string.split(' ')
  }

  const stringToArray = string => string.split(' ');
  //same answer but using arrow function. Do not forget the space between the quotes 'space' not ''  