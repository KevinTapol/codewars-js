/*
Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

Parameters or Edge Cases:
  arguments will be valid objects with string values maintaining the same case sensitivity

Return:
  boolean true if all objects in the input array have the same value for the key language

Examples:
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
] --> 
Pseudocode:
  iterate through the objects of the array comparing the first element to every other element key value pair of language
  if any of the values are not the same then return false
  else return true
*/

// My Answer
function isSameLanguage(arr) {
  for(let e of arr){
    if (arr[0].language != e.language){
      return false
    }
  }
  return true
}

// My Answer Refactored using array methods to filter and compare lengths of equal key value pairs
function isSameLanguage(arr) {
    let far = arr.filter((e) => arr[0].language === e.language)
  return arr.length === far.length
}

// My Answer One liner arrow fn
const isSameLanguage = (a) => a.length === a.filter((e) => a[0].language === e.language).length

console.log(isSameLanguage([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ])) // true

console.log(isSameLanguage([
  { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
  { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
  { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
])) // false

// Best Practices and Most Clever
// array.every() instead of .filter but the same logic
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);}

// creating an array of values of which are unique by using new Set()
const isSameLanguage = list => {
  return [...new Set( list.map(el => el['language']) )].length === 1
}

// similar to best practices but specifying array.every(element, index, array)
function isSameLanguage(list) {
  return list.every((d, i, arr) => d.language === arr[0].language);
}