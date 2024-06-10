/*
Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

Parameters or Edge Cases:
    inputs will be an array of objects with a key value pair of the word language being the key and the specific coding language being the value

Return:
    return boolean true if any object in the array has a language: 'Ruby' else return false 
Examples:
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]; --> true
Pseudocode:
    iterate through the input array and if language: 'Ruby' return true
    outside of the iteration return false
*/

// My Answer
function isRubyComing(arr) {
   for (index in arr) {
        if (arr[index].language === 'Ruby') {
            return true
        }
   }return false
}

console.log(isRubyComing([
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
])) // true

// Best Practices and Most Clever
// using .some() to return boolean 
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}

// clever using using object notation where the object being called has a key language with a value of 'Ruby'
const isRubyComing = list => list.some(({ language }) => language === 'Ruby');

// using .find() with a ternary instead of .some()
function isRubyComing(list) {
    return list.find(x => x.language == 'Ruby') ? true : false;   
  }
// using .filter() and .length() for boolean return
function isRubyComing(list) {
    return list.filter(el => el.language == 'Ruby').length != 0;
  }

// Brute force for loop with .hasOwnProperty()
function isRubyComing(list) {
    var arr = [];
    for(var i = 0; i < list.length; i++) {
      if(list[i].hasOwnProperty('language')) {
        if(list[i].language === 'Ruby') {
          arr.push(true)
        } else {
          arr.push(false);
        }
      }
    }
    arr = arr.filter(function(x) {
      return x === true;
    });
    return arr[0] || false;
  };

// lol clever using regex to search through tests with stringify()
const isRubyComing = list =>
    /Ruby/.test(JSON.stringify(list));