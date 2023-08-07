// Switcheroo
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/ 

// Parameters or Edge Cases:
/*
    inputs will be a string of 'a', 'c', and 'b'
    inputs will not be empty or null
*/ 

// Return:
/*
    the input string with every 'a' switched with 'b' and every 'b' switched with 'a' while maintaining the positions of 'c'
*/ 

// Examples:
/*
    'abc' => 'bac'
    'aaabcccbaaa' => 'bbbacccabbb' 
    'ccccc' => 'ccccc'  
*/ 

// Pseudocode:
/*
    // declare an empty string result
    // iterate through the input string
    // if the current element is 'a' concatenate 'b' to result
    // if the current element is 'b' concatenate 'a' to result
    // if the current element is 'c' concatenate 'c' to result
    // return result

*/ 

// my answer
function switcheroo(x){
    // declare an empty string result
    let result = ''
    // iterate through the input string
    for (let i = 0; i < x.length; i++) {
    // if the current element is 'a' push 'b' to result
        if (x[i] == 'a') {
            result += 'b'
        }
    // if the current element is 'b' push 'a' to result
        if (x[i] == 'b') {
            result += 'a'
        }
    // if the current element is 'c' push 'c' to result
        if (x[i] == 'c') {
            result += 'c'
        }
    }
    // return result
    return result
}

// my answer refactored
function switcheroo(x){
    let result = ''
    for (let i = 0; i < x.length; i++) {
        x[i] == 'a' ? result += 'b' : x[i] == 'b' ? result += 'a' : result += 'c'
    }
    return result
}

console.log(switcheroo('abc')) // 'bac'
console.log(switcheroo('aaabcccbaaa')) // 'bbbacccabbb'
console.log(switcheroo('ccccc')) // 'ccccc'

// best practices and most clever
// using regex iterate through the input string looking for 'a' and 'b' replace every 'a' with 'b' else replace 'b' with 'a'
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

// using array methods ternary and convert back to string
const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');

// using spread and brackets instead of split('')
function switcheroo(x){
    return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
  }

// switch case default
function switcheroo(x){
    return x.split('').map((el) => {
      switch (el) {
        case 'a':
          return 'b';
  
        case 'b':
          return 'a';
      
        default:
          return 'c'
      }
    }).join('');
  }

// using object key value pairs
const dict = {
    'a': 'b',
    'b': 'a',
}
function switcheroo(x){
  return x.split('').map(item => (dict[item] || item)).join('');
}