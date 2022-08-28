// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// Parameters or Edge cases: inputs will be strings
// Return: a string of next color
// Examples: when the input is green, output should be yellow
// Psuedo code:  compare the input to strings "green" "yellow" "red" 
//               return next string in order "green" -> "yellow" -> "red" -> "green"
// I'd prefer to do simple if else but I'll do a nested arrow fn with a ternary just because I can

// my prefered answer
function updateLight(current) {
    if(current == "green"){
        return "yellow"
    } else if (current == "yellow"){
        return "red"
    } else{
        return "green"
    } 
}
// my arrow function nested ternary answer yeah I just did that
// lol this turned out to be most clever
const updateLight = current => current == "green" ? "yellow" : (current == "yellow"? "red" : "green")

// best practices
// lately best practices have been nested ternaries. I disagree. I think best practices should be easily readable if else statements, for loops, regular functions and common methods
function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

// using the unpopular switch case
// best practices includes break; but most answers do not use break;
function updateLight(current) {

    switch (current) {
        case 'green':
            break;
            return 'yellow';
        case 'yellow':
            break;
            return 'red';
        case 'red':
            break;
            return 'green';
        default:
            break;
            throw 'Error: wrong input';
    }
    
}

// object but declaring the object name as dict like python
// returning the value of the key input
function updateLight(current) {
    var dict = {'green' : 'yellow', 
                'yellow' : 'red', 
                'red' : 'green'};
    return dict[current];
}

// using arrow function and an object for key value pair
updateLight=(c,obj={green:'yellow',yellow:'red',red:'green'})=>obj[c]

// using indexOf input + 1
// very clever arrow function to take the input and return the next indexOf the declared array
const updateLight = c => s[s.indexOf(c) + 1];
const s = ['red', 'green', 'yellow', 'red', 'B)'];

// same idea as above with next indexOf but using 2 arrow functions to call on the other
const updateLight = x => cycle(x, ['green', 'yellow', 'red']);
const cycle = (x, sequence) => sequence[(sequence.indexOf(x) + 1) % sequence.length];