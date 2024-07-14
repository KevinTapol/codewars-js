/*
Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

Parameters or Edge Cases:
    inputs will be an array of objects
    objects will be formatted to have the same case sensitivity

Return:
    an object with key value pairs with the language and count of number of devs that know the language

Examples:
[
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
] --> { C: 2, JavaScript: 1, Ruby: 1 }

Pseudocode:
    use .reduce() to iterate through the array of objects grabbing only the language key value pair and create a new empty default object
    if the value of the current element key language already exists ie c.language increment the value by 1
    else add the current element ie c.language key value pair to the empty default object 
    return the accumulated object or acc
*/

// My Answer
function countLanguages(arr) {
    return arr.reduce((acc, c) => {
        if (acc[c.language]){
            acc[c.language]++
        } else {
            acc[c.language] = 1
        }return acc
    },{})
}   

// My Answer refactored if else to ternary
function countLanguages(arr) {
    return arr.reduce((acc, c) => {
        acc[c.language] ? acc[c.language]++ : acc[c.language] = 1
        return acc
    },{})
}


console.log(countLanguages([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ])) // { C: 2, JavaScript: 1, Ruby: 1 }

// Best Practices and Most Clever
// using .forEach() loop with a global declared object instead of .reduce()
function countLanguages(list) {
    var count = {};
    list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
    return count;
}

// Very clean and descriptive for loop and global object
function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    // declare object to contain count for each language
    let langCount = {};
    
    
    // loop through each object in the array
    for (let i = 0; i < list.length; i++) {
    
      // find language for each developer
      // add language to object if it does exist
      if (langCount[list[i].language] === undefined) {
        langCount[list[i].language] = 1;
      } else {
        // otherwise increment language count by 1
        langCount[list[i].language]++;
      }  
    }
    
    // return object
    return langCount;
}

// creating a copy of the input array but of only the key value pairs of language then using .reduce() on the copy
function countLanguages(list) {
    const arr = list.map(el => el['language'])
    return arr.reduce((a, i)=> {
      a[i] = a[i] + 1 || 1
      return a
    }, {})
}

// using acc.hasOwnProperty(c.language) with .reduce(acc,c)
function countLanguages(list) {
    return list.reduce((langs, dev) => {
        langs.hasOwnProperty(dev.language)
            ? langs[dev.language] += 1
            : langs[dev.language]  = 1;
        return langs;
    }, {});
}

// one liner -~ adds 1 and flips the sign from neg to pos or pos to neg
const countLanguages = list =>
    list.reduce((pre, val) => (pre[val.language] = -~pre[val.language], pre), {});

// Clean one liner using .reduce()
const countLanguages = list =>
	list.reduce((p,c) => {
  	p[c.language] = (p[c.language] || 0) + 1
    return p
  }, {})