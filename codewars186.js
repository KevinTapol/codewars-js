// Parameters or Edge Cases:
//      inputs will be intergers greater than 1
//      If the number is prime return the string '(integer) is prime'.
// Return:
//      an array with all the inputs divisors except for 1 and the input itself from smallest to largest
// Examples:
//      describe("Tests", () => {
//          it("test", () => {
//        Test.assertDeepEquals(divisors(15), [3, 5]);
//        Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
//        Test.assertDeepEquals(divisors(13), "13 is prime");
//          });
//      });
// Psuedo Code:
//      take in the number and decrement that intenger by 1 until you reach 2 dividing the input by this number
//      if there is no remainder push that divisor into an array
//      if the array is empty return `${input} is prime` else sort the array and return it
// my answer
function divisors(integer) {
    // declare a global emtpy array
    var answer = []
    // loop through integer values less than the input decrememting by 1 but greater than 1
    for(let i = integer - 1; i > 1; i--){
    // if there is no remainder then push that divisor to the global array
        if(integer % i === 0){
            answer.push(i)
        }
    // if the array length is 0 meaning empty array then return the input is a prime number 
    }if (answer.length === 0){
        return `${integer} is prime`
    // else sort the array ascending and return the array
    } else {
        return answer.sort((a,b)=> a-b)
    }
}

// my answer refactored arrow function ternary
const divisors = (integer) => {
    var answer = []
    for(let i = integer - 1; i > 1; i--){
        if(integer % i === 0){
            answer.push(i)
        }
    }return answer.length === 0 ? `${integer} is prime` : answer.sort((a,b)=> a-b)
}

// best practices and most clever
// same as my answer but they used Math.floor() and + instead of template literals
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};

// Array.from() to create an array establish the length then what to do per each element
// .slice() to start at the 2nd element .filter() to create a shallow array copy where each element has no remainder
// using truthy ternary for return statement
function divisors( int ) {
    const arr = Array.from({length: int-1}, (_, i)=> i+1).slice(1).filter(el => int % el === 0)
    return arr.length ? arr : `${int} is prime`;
};

// I have never seen someone declare the array in the for loop start statement
function divisors(integer) {
    for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
    return div.length > 0 ? div : integer + " is prime";
}

// using spread Array .keys to establish an array of integers 
// then .slice start at 2 end at integer
// then .filter where each element when divided has no remainder
function divisors(integer) {
    var divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
    return divisors.length > 0 ? divisors : integer + ' is prime';
};

// while loop
function divisors(integer) {
    var matched = [], i = 1;
    
    while( ++i < integer ) {
      (integer % i !== 0 ) || matched.push(i); 
    }
    
    return matched.length <= 1 ? (integer + " is prime") : matched;
};

// different for loop start stop step
const divisors = (integer) => {
    const numberDivisors = []
    
     for (let i = 2; i < integer; i++)
       integer % i === 0 && numberDivisors.push(i)
     
     return numberDivisors.length > 0 ? numberDivisors : `${integer} is prime`
};

// interesting use of square root
function divisors(integer){
  var arr=[];
  var sqr=Math.sqrt(integer);

  var i=2;
  for(; i<=sqr; i++){
    if(integer % i) continue;
    arr.push(i);
    arr.push(integer/i);
  }
  if(i-1 == sqr){
    arr.pop();
  }return arr.length ? arr.sort(function (a,b){return a-b;}) : (integer+" is prime");
};