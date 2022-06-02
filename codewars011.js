// Parameters or Edge cases: The array will never be empty.
// Return: the average of the given array rounded down to its nearest integer.
// Examples:
// Psuedo code: .reduce() add up elements divide by array.length Math.floor() to round down to nearest integer

function getAverage(marks){
let sum = marks.reduce((acc, c) => acc + Number(c), 0)
return Math.floor(sum/marks.length)
}
 