// Parameters or Edge cases: inputs can be strings or numbers
// Return: true if input is a palindrome false if not
// Examples: "anna"   ==> true
        //"walter" ==> false
        //12321    ==> true
        //123456   ==> false
// Psuedo code: .toString()to convert to string 
              //.split('')to create an array at each character 
              //.reverse()to reverse the array
              //.join('')to return to a reverse string of the initial string input and compare 


//my answer
function isPalindrome(line) {
    return (line.toString() === line.toString().split('').reverse().join(''));
  }

//best practices
function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') )
    
  }