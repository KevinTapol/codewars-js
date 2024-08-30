/*
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

Parameters or Edge Cases:
    1st input will be an array of objects of key value pairs
    inputs will always be valid and formatted ie 'yes' 'no' 'JavaScript'
    2nd input will be a random value from the key language ie 'JavaScript'
    
Return:
    return an array of objects where the key value pair language is 'JavaScript' and githubAdmin is 'yes'

Examples:
    [
        { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
        { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
        { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
    ] -->
        [
          { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
          { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
        ]

Pseudocode:
    create a filtered array copy of objects where each element object that has the key for language is the 2nd input and the object has the key value pair githubAdmin: 'yes'
    return the array
*/

// My Answer
function findAdmin(arr, lang) {
    return arr.filter(e => e['language'] === lang && e['githubAdmin'] === 'yes')
}

// My Answer refactored one liner arrow fn
const findAdmin = (arr, lang) => arr.filter(e => e['language'] === lang && e['githubAdmin'] === 'yes')

console.log(findAdmin([
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
], 'JavaScript')) /* [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
  ] */

console.log(findAdmin([
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
], 'Ruby')) // []

console.log(findAdmin([
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
], 'Python')) // []

// Best Practices and Most Clever
// Same as my answer but not using arrow fn syntax
function findAdmin(list, lang) {
    return list.filter(function(dev){return dev.language == lang && dev.githubAdmin == 'yes'});
}

// clever use of object to avoid dynamic bracket pairs with quotes calls
const findAdmin = (list, lang) =>
    list.filter(({language, githubAdmin}) => language === lang && githubAdmin === `yes`);

// Brute force for loop 
function findAdmin(list, lang) {
    let gitHub = [];
    
    for (let i = 0; i < list.length; i++) {
      if (list[i].githubAdmin === 'yes' && list[i].language === lang) {
        gitHub.push(list[i])
      }
    } return gitHub;
}