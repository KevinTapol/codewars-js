// Bumps in the Road
/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/ 

// Parameters or Edge Cases:
/*
    inputs will be a single string consisting of only 'n' or '_'
    will inputs be empty or null
*/ 

// Return:
/*
    if there are 15 or less 'n' in the string return 'Woohoo!' else return 'Car Dead'
*/ 

// Examples:
/*
    "n" => "Woohoo!"
    "__nn_nnnn__n_n___n____nn__nnn" => "Woohoo!"
    "nnn_n__n_n___nnnnn___n__nnn__" => "Woohoo!"
    "_nnnnnnn_n__n______nn__nn_nnn" => "Car Dead"
    "______n___n_" => "Woohoo!"
*/ 

// Pseudocode:
/*
    // convert the input string into an array and filter for elements of only 'n' named result
    // if the length of result is greater than 15 return 'Car Dead' else 'Woohoo!'
*/ 

// my answer
function bump(x){
    // convert the input string into an array and filter for elements of only 'n' named result
    let result = x.split('').filter(e => e == 'n')
    // if the length of result is greater than 15 return 'Car Dead' else 'Woohoo!'
    return result.length > 15 ? 'Car Dead' : 'Woohoo!'
}

// my answer refactored
function bump(x){
    return x.split('').filter(e => e == 'n').length > 15 ? 'Car Dead' : 'Woohoo!'
}

// my answer refactored arrow fn implicit return Codewars only
const bump = (x) => x.split('').filter(e => e == 'n').length > 15 ? 'Car Dead' : 'Woohoo!'

console.log(bump("n")) // "Woohoo!"
console.log(bump("__nn_nnnn__n_n___n____nn__nnn")) // "Woohoo!"
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")) // "Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")) // "Car Dead"
console.log(bump("______n___n_")) // "Woohoo!"

// best practices and most clever
// split on 'n' ommiting 'n' on the strings leaving elements in front or behind them changing the number
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

// using regex.match()
function bump(x){
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
  }

// regex .replace()
function bump(str){
  return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}

// using spread operator and array brackets to make an array of each string character as an element
const bump = x => 
  [...x].filter(char => char === "n").length <= 15 ? "Woohoo!" : "Car Dead";