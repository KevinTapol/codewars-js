// Parameters or Edge Cases:
//      input will be a positive integer
//      Random tests go up to n = 500000.
// Return:
//      the number of divisors of the input integer ie the count of numbers less than the input number that has 0 as a remainder
// Examples:
//      4 --> 3 (1, 2, 4)
//      5 --> 2 (1, 5)
//      12 --> 6 (1, 2, 3, 4, 6, 12)
//      30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Psuedo Code:
//      declare a global variable for total count of divisors that result in no remainders
//      loop through the integers greater than 0 up to and including the input and divide by those numbers
//      count the number of times the divisors had no remainders
//      return the count

// my answer
function getDivisorsCnt(n){
    // declare global variable
    var count = 0
    // loop through integers 1 to n inclusively and divide n by those numbers
   for(let i = 1; i <= n; i++){
    // if there is no remainder add 1 to the divisor count
    if(n % i === 0){
        count += 1
    }
    // outside of the for loop return the count
   }return count
}

// my answer refactored arrow function
const getDivisorsCnt = (n) => {var c = 0;{for(let i = 1; i <= n; i++){if(n % i === 0) {c +=1}}return c}}

// best practices and most clever
// the only difference from my original answer is that they declared the count inside the for loop
function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
}

// using spread and .reduce()
const getDivisorsCnt = n =>
  [...Array(n / 2 ^ 0)].reduce((pre, _, idx) => n % ++idx ? pre : ++pre, 1);

// do while loop
const getDivisorsCnt = function( $ ){
    let [i, num] = [0, 0];
    
    do{
      if ( $ % i === 0 ) {
        num += 1;
      }
    }while( $ >= ++i )
    
    return num;
}

// using Math.sqrt()
function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}

// while loop with formulas
function getDivisorsCnt(n) {  
    if (n === 1) return n
  
    // Use formuls http://vk.cc/4G1m8t
    let divArr = [[2, 0]] // 'divisor', 'number'
    let div = divArr[0][0] // first divisor
  
    while (n > 1) {
      if (n % div === 0) {
        for (let i = 0; divArr.length; i++) {
          if (divArr[i][0] === div) {
            divArr[i][1] += 1
            break
          } else {
            if (i === divArr.length - 1) {
              divArr.push([div, 1])
              break
            }
          }
        }
        n /= div
      } else {
        div += 1
      }
    }
    
    for (let i = 0; i < divArr.length; i++) {
      n *= divArr[i][1] + 1
    }
    
    return n
}