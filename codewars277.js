/*

Coding Meetup #2 - Higher-Order Functions Series - Greet developers

Parameters or Edge Cases:
    inputs will always be valid and order does not matter
Return:
    return an array where each object will have a new property 'greeting' with the following string value:
    Hi < firstName here >, what do you like the most about < language here >?
Examples:
    Inputs
    var list1 = [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
    ];

    Outputs
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?'
        },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python', greeting: 'Hi Lukas, what do you like the most about Python?'
        },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Madison, what do you like the most about Ruby?'
        } 
    ];
Pseudocode:
    create a copy of the input array iterating through each object
    add to each object of the array the key greeting and value Hi < this.firstName >, what do you like the most about < this.language >?
    return the new array of objects
*/

// My Answer brute force for loop
function greetDevelopers(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].greeting = `Hi ${arr[i].firstName}, what do you like the most about ${arr[i].language}?`
    }
    return arr
}

// My Answer using array methods
function greetDevelopers(arr) {
    let arrOfObj = arr.map(e => ({
        ...e,
        greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`
    }))
    return arrOfObj
}

// My Answer refactored and Most Clever
function greetDevelopers(r) {
    return r.map(e => ({ ...e, greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`}))
}

// My answer One liner
const greetDevelopers = (r) => r.map(e => ({ ...e, greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`}))

console.log(greetDevelopers([
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
])) 
/*
[
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?'
    },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python', greeting: 'Hi Lukas, what do you like the most about Python?'
    },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Madison, what do you like the most about Ruby?'
    } 
    ]
*/

// Best Practices using .forEach
function greetDevelopers(list) {
    list.forEach(function(developer) {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });
    
    return list;
}

// Similar to Most clever but using a return statement instead of a spread operator
function greetDevelopers(list) {
  return list.map( function( a ) {
    a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
    return a;
   });
}

// My refactored version of the above
function greetDevelopers(list) {
    return list.map( e => {
        e.greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`
        return e
     });
}

// using .map() arrow fn without using a local return statement
function greetDevelopers(list) {
    return list.map(x => (x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`, x));
  }

//   using object.assign()
function greetDevelopers(list) {
    return list.map(x => Object.assign({}, x, {
      greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
    }))
  }

// Why is .filter() also including the previous properties here? I expected this to only return the key value pair designated in the arrow fn.
function greetDevelopers(list) {
    return list.filter(ele => ele.greeting = `Hi ${ele.firstName}, what do you like the most about ${ele.language}?`);
  }