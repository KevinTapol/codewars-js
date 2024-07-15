/*
Name Array Capping
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

Parameters or Edge Cases:
    inputs will be an array of strings
    the strings will have mixed lowercase and uppercase

Return:
    return the array of strings with each string first character capitalized and the remaining as lowercase
Examples:
    capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
    capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
Pseudocode:
    iterate through the array and create a copy with each string first character to uppercase and lowercase the rest
*/

// My Answer
function capMe(names) {
    return names.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
}

// My Answer refactored one liner arrow fn
const capMe = a => a.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())

console.log(capMe(['jo', 'nelson', 'jurie'])) // ['Jo', 'Nelson', 'Jurie']

// Best Practices and Most Clever
// same idea using .map() to create a copy of the input array but using charAt(index) and .substring(index) instead of [] and .slice() with a regular function instead of an arrow function
function capMe(names) {
    return names.map(function (n) { return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase(); });
}

// using charAt() and .slice()
function capMe(names) {
    return names.map(function(name) {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();});
}

// Brute Force For Loop
function capMe(names) {
	let words = []
	for (let i = 0; i < names.length; i++) {
		let sum = names[i].charAt().toUpperCase() + names[i].slice(1, ).toLowerCase()
		words.push(sum)
	}
	return words
}

// regex truthy falsy checking for index value then index 0 is uppercase then 1 and above would return true resulting in lowercase
const capMe = n => n.map(x => x.replace(/\w/gi, (c, i) => i? c.toLowerCase() : c.toUpperCase()))

// another regex but only dealing with uppercase for first char
let capMe=n=>n.map(v=>v.toLowerCase().replace(/^./,(a)=>a.toUpperCase()));