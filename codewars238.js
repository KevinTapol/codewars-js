// Remove duplicate words
/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' => 'alpha beta gamma delta'
*/ 

// Parameters or Edge Cases:
/*
    inputs will be a string of words
    will the words always be lowercase letters?
    can the input be empty or null?
*/ 

// Return:
/*
    a string of each word only once
*/ 

// Examples:
/*
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' => 'alpha beta gamma delta'
*/ 

// Pseudocode:
/*
    // convert the string into an array of elements splitting on white space
    // declare a new array named result of the array using Array.from(new Set(input_array))
    // convert the array back into a string and return it
*/ 

// my answer
// function removeDuplicateWords (s) {
//     // convert the string into an array of elements splitting on white space
//     let input_array = s.split(' ')
//     // declare a new array named result of the array using Array.from(new Set(input_array))
//     let result = Array.from(new Set(input_array))
//     // convert the array back into a string and return it
//     result = result.join(' ')
//     return result
// }

// my answer refactored
function removeDuplicateWords (s) {
    return Array.from(new Set(s.split(' '))).join(' ')
}

// my answer refactored arrow fn implicit return Codewars only
const removeDuplicateWords = (s) => Array.from(new Set(s.split(' '))).join(' ')
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta'


// best practices and most clever
// using [...new Set()] instead of Array.from(new Set())
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// using filter 3rd argument array without an arrow fn
// function(currentValue, index, array)
function removeDuplicateWords (s) {
    return s.split(' ').filter((n, i, s) => {
      return s.indexOf(n) === i;
    }).join(' ');
}

// cleaner one liner of the above
const removeDuplicateWords = s => s.split(' ').filter((w,i,arr)=>arr.indexOf(w)==i).join(' ');

// using .includes() to check if the element does not exist in the array then push it to the array
const removeDuplicateWords = s => {
    let cleanArr = [];
    s.split(' ').forEach(current => {
        if(!cleanArr.includes(current)){
            cleanArr.push(current);
        }
    });
    return cleanArr.join(' ');
  };

// using regex
removeDuplicateWords=Q=>Q.replace(/ ?(\S+)/g,(V,B)=>Q[B]?'':Q[B]=V,Q={})