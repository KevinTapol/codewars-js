/*
Insert dashes

Parameters or Edge Cases:
    inputs will be integers greater than or equal to 0

Return:
    the input integer as a string where there are dashes "-" in-between consecutive odd digits in the integer
Examples:
    454793 --> '4547-9-3'
    123456 --> '123456'
    1003567 --> '1003-567'
Pseudocode:
    declare an empty array named result
    copy the input and convert it into an array of elements where each element is a digit as a string
    iterate through the array
        if the current element is odd and the next element is odd then push the current element with "-" concatenated to result
        else push the current element to result
        convert result into a string and return it
*/ 

// My Answer
function insertDash(num) {
    let result = []
    let arr = String(num).split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0 && arr[i + 1] %2 != 0 && i != arr.length -1){
            result.push(arr[i] + "-")
        }else {
            result.push(arr[i])
        }
    }
    return result.join('')
}

// My Answer refactored to ternary instead of if else statement
function insertDash(num) {
    let result = []
    let arr = String(num).split('')
    for(let i = 0; i < arr.length; i++){
        arr[i] % 2 != 0 && arr[i + 1] %2 != 0 && i != arr.length -1 ? result.push(arr[i] + "-") : result.push(arr[i]) 
    }
    return result.join('')
}

// My Answer Refactored using array methods
function insertDash(num) {
    let arr = String(num).split('')
    return arr.map((e, i) => arr[i] % 2 != 0 && arr[i + 1] %2 != 0 && i != arr.length -1? e = arr[i] + "-" : e = arr[i]).join('')
}

// My Answer array methods refactored to default declared params of passed in arguments
function insertDash(num, arr = String(num).split('')) {
    return arr.map((e, i) => arr[i] % 2 != 0 && arr[i + 1] %2 != 0 && i != arr.length -1? e = arr[i] + "-" : e = arr[i]).join('')
}


// My Answer One liner arrow fn
const insertDash = (num, arr = String(num).split('')) => arr.map((e, i) => arr[i] % 2 != 0 && arr[i + 1] %2 != 0 && i != arr.length -1? e = arr[i] + "-" : e = arr[i]).join('')

console.log(insertDash(454793)) // '4547-9-3'
console.log(insertDash(123456)) // '123456'
console.log(insertDash(1003567)) // '1003-567'
 
// Best Practice and Most Clever
// using regex with .replace specifying odd integer be separated with "-"
function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

// Same as above but using String() instead of .toString()
function insertDash(num) {
    return String(num).replace(/([13579])(?=[13579])/g, '$1-');
 }

// Similar to my unrefactored for loop but cleaner conditional statements than mine
function insertDash(num) {
    //code me
  num = num.toString().split('')
   
   for(let i = 0; i < num.length; i++){
     if (num[i]%2 > 0 && num[i +1]%2 > 0){
       num[i] = num[i] + '-'
     }
   }
  
   return num.join('')
   
 }

//  Very Clever using .reduce() with a conditional
function insertDash(num) {
    return num.toString().split('').reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + '-';
      
      return acc + c;
    }, '');
 }