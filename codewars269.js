/*
Add property to every object in array

Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
The questions array is already defined for you and is not the same as the one in the example.

Parameters or Edge Cases:
    inputs will be an array of objects
    the array can be greater than or equal to 0
Return:
    the input array of objects where each object as the key value pair of "usersAnswer": null 
Examples:
    Input
        var questions = [{
            question: "What's the currency of the USA?",
            choices: ["US dollar", "Ruble", "Horses", "Gold"],
            corAnswer: 0
        }, {    
            question: "Where was the American Declaration of Independence signed?",
            choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
            corAnswer: 0
        }];
    Output
        var questions = [{
            question: "What's the currency of the USA?",
            choices: ["US dollar", "Ruble", "Horses", "Gold"],
            corAnswer: 0,
            usersAnswer: null
        }, {
            question: "Where was the American Declaration of Independence signed?",
            choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
            corAnswer: 0,
            usersAnswer: null
        }];
Pseudocode:
        Create a function and name it whatever you want. In this case, I'll use the name queguey meaning what dude? in spanish.
        Iterate through the input array of objects and add a key value pair of usersAnswer = null
        Return the new array
        Outside of the function we named, call the function passing in the input named functions.
        We CANNOT simply call the function, we must pass in the specific input named questions.
        
*/
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];

// My answer using array methods
function queguey(arr) {
    let newArr = arr.map(e => {
        e.usersAnswer = null
    })
    return newArr
}
queguey(questions)

// My answer refactored by not declaring a new array
function queguey(arr) {
    return arr.map(e => {
        e.usersAnswer = null  
    })
}
queguey(questions)

// My Answer using a brute force for loop
function queguey(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].usersAnswer = null
    }
    return arr
}
queguey(questions)

console.log(queguey(questions))

// Best Practices and Most Clever
// Well, it turns out you can just manipulate the array of objects directly. The description did not list this.
questions.forEach(function (i) {
    i.usersAnswer = null;
});

// Same as Best Practices and Most Clever but using an arrow function inside of .forEach()
questions.forEach(x => x.usersAnswer = null);

// using a for loop but using the key words of for element in array
for (key in questions)
    questions[key].usersAnswer = null;

// using .reduce()
questions.reduce(function(last, cur){
    return cur.usersAnswer = null;
  },0);

// using Object.assign()
questions.map(obj => Object.assign(obj, { usersAnswer: null }))