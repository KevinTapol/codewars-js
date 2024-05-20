/*
Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

Parameters or Edge Cases: 
    inputs will be an array of objects
    all data will be valid and uniform
Return:
    an integer representing the number of objects that contain the key value pairs of continent: 'Europe' and language: 'JavaScript'
Examples:
    var list1 = [
        { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
        { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
        { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
        { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ]; --> 1
Pseudocode:
    iterate through the array keeping only the objects that contain the key value pairs of continent: 'Europe' and language: 'JavaScript'
    return the length of the new filtered array
*/

// My Answer using .filter() I purposefully kept the new array as key value pairs to maintain the data.
function countDevelopers(list) {
    let arr = list.filter(e => e.continent ==='Europe' && e.language === 'JavaScript')
    return arr.length
}


// My Answer arrow fn one liner
const countDevelopers = (x) => x.filter(e => e.continent === 'Europe' && e.language === 'JavaScript').length

console.log(countDevelopers([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]))

// Best Practices and Most Clever 
// Same as my arrow fn one liner
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }

//  Here they are filtering twice instead of in one filter statement
function countDevelopers(list) {
    return list
      .filter(dev => dev.language === "JavaScript")
      .filter(dev => dev.continent === "Europe")
      .length
  }

// using .reduce() instead!
function countDevelopers(list) {
    return list.reduce((count, dev) => 
      (dev.continent === 'Europe' && dev.language === 'JavaScript')
        ? count + 1 : count
      , 0);
}

// using .reduce() and maintaining the key names of continent and language
const countDevelopers = list => list.reduce((res, {language, continent}) => language == 'JavaScript' && continent == 'Europe' ? res + 1 : res, 0);

// using .filter on object keys
const countDevelopers = list => (
	list.filter(({continent, language}) => continent === 'Europe' && language === 'JavaScript').length
)

// brute force for loop
function countDevelopers(list) {
    x=0;
  for(i=0;i<list.length;i++){
      if(((list[i].continent)==='Europe')&&((list[i].language)==="JavaScript")){
          x+=1
      }
  }
      return x
  }