// Parameters or Edge cases:
// Return: a string with all numbers removed
// Examples: '! !'                 -> '! !'
            //'123456789'           -> ''
            //'This looks5 grea8t!' -> 'This looks great!'
// Psuedo code: check if each value is a number in value but not type with search params/^[0-9]*$/ and replace with empty string ''

//my answer
function stringClean(s){
    return s.replace(/[0-9]/g, '');
  }

//best practices
function stringClean(s){
    return s.replace(/\d/g, "");
  }

//intersting answer converting to array to filter int then back to string
function stringClean(s){
    return s.split('').filter((n) => n != parseInt(n)).join('');
  }