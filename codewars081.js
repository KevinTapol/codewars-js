// Parameters or Edge cases:Names given are always valid strings
//                          if the name starts with "R" or "r" name plays banjo
// Return: a string name + plays banjo or name + does not play banjo
// Examples:
// Psuedo code: capitalize the string with toUpperCase()
//              use .split("")to create an array of each letter as an element
//              ternary check first index of array is equal to "R"
//              if true return template literals name plays banjo
//              if false return template literals name does not play banjo


//my answer 
//Out of habit, I always use arrays but I could have just targeted the first index of string name with name[0]
function areYouPlayingBanjo(name) {
    let arr = name.toUpperCase().split("")
    return  arr[0] == "R" ? `${name} plays banjo` : `${name} does not play banjo`
}

//best practices and most clever
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

//arrow fn using .match()
const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");
