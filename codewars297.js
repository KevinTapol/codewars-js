/*
Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

Parameters or Edge Cases:
    inputs will be an array of objects

Return:
    return the string of the value from `firstName, country`  of the first Python developer
    if there are no Python developers return 'There will be no Python developers'
    'There will be no Python developers'

Examples:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]; --> 'Victoria, Puerto Rico'

var list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
]; --> 'There will be no Python developers'

Pseudocode:
    filter the objects where the value of language is equal to 'Python'
    if the new array is empty return 'There will be no Python developers' else return the first entry with the values from firstname, country
*/

// My Answer
function getFirstPython(arr) {
    let newArr = arr.filter(e => e.language === 'Python') 
    return newArr.length < 1 ? 'There will be no Python developers' : `${newArr[0].firstName}, ${newArr[0].country}`
}

console.log(getFirstPython([
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ])) // 'Victoria, Puerto Rico'

console.log(getFirstPython([
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ])) // 'There will be no Python developers'

// Best Practices and Most Clever
// using .find() to return the first element that matches the criteria instead of .filter()
function getFirstPython(list) {
    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
}

// Brute force for loop
function getFirstPython(list) {
    for (var i=0; i<list.length; ++i)
      if (list[i].language=='Python')
        return list[i].firstName+', '+list[i].country;
    return 'There will be no Python developers';
  }

// Very Clever to create a new object property of firstOrDefault
function getFirstPython(list) {
    let first = list.firstOrDefault(x => x.language === 'Python');
    return first ? `${first.firstName}, ${first.country}` : 'There will be no Python developers';
  }
  
  Object.defineProperty(Array.prototype, 'firstOrDefault', {
    value: function(fn, def) {
      for(var key in this)
        if(fn(this[key], +key, this))
          return this[key];
      return def;
    }
  });

// using .findIndex()
function getFirstPython(list) {
    var i = list.findIndex(x => x.language === "Python");
    return (i >= 0) ? list[i].firstName + ", " + list[i].country : "There will be no Python developers";
}

// clever arrow fn to .filter then .map returns based on pipe characters if there are no elements in the new array
let getFirstPython=l=>l.filter(x=>x.language==='Python').map(e=>e.firstName +', '+ e.country)[0] || 'There will be no Python developers';

// Very Clean and great choice for variable names
function getFirstPython(list) {
    let person = list.find( item => item.language == 'Python')
    return person ? `${person.firstName}, ${person.country}` : "There will be no Python developers"
  }