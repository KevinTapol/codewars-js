// Parameters or Edge cases: num will always be postive integer > 0
// Return:
// Examples: summation(2) -> 3
            //1 + 2
            //summation(8) -> 36
            //1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// Psuedo code: for loop sum += up to num


//my answer && best practices
var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i ++){
        sum += i
    }return sum
  }

//most clever
const summation = n => n * (n + 1) / 2;