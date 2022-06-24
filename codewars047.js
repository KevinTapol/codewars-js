// Parameters or Edge cases: inputs are strings 
// Return: 2 input strings as one with a space inbetween
// Examples: ('James', 'Stevens') => 'James Stevens'
// Psuedo code: use concat() to combine the strings with a space

//my answer
function combineNames(s1,s2){
    return s1.concat(' ',s2)
}

//best practices most answers use .join() or template literals 
const combineNames = (...names) => names.join(' ');