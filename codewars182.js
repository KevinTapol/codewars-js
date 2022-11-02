// Paramters or Edge Cases:
//      an array of ones and zeroes
//      the arrays can have varying lengths, not just limited to 4
// Return:
//      convert the input binary value to an integer
// Examples:
//      Testing: [0, 0, 0, 1] ==> 1
//      Testing: [0, 0, 1, 0] ==> 2
//      Testing: [0, 1, 0, 1] ==> 5
//      Testing: [1, 0, 0, 1] ==> 9
//      Testing: [0, 0, 1, 0] ==> 2
//      Testing: [0, 1, 1, 0] ==> 6
//      Testing: [1, 1, 1, 1] ==> 15
//      Testing: [1, 0, 1, 1] ==> 11
// Psuedo Code:
//      take in the array and convert it to a string
//      convert the string back into an interge with the base powers of 2
//      return the integer

// my answer
function binaryArrayToNumber (arr) {
    return parseInt(arr.join(''), 2)
}

// my answer refactored  also best practices and most clever
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2)

// using .reduce()
function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
}

// another .reduce() but using the powers of 2
const binaryArrayToNumber = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

// using a for loop with the powers of 2 as a separate global variable
const binaryArrayToNumber = arr => {
    // your code
    //array recieved as argument
    //reverse array to begin at first digit
    //loop through array
    //first digit signifies number of 1s| second signifies 2s| 3rd signifies 4s| 4th signifies 8s|
    //add numbers to variable | return variable
    arr.reverse();
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 1){
          count += Math.pow(2,i);
        }
    }return count;
};

// interesting work around for starting at the end of the array
const binaryArrayToNumber = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
    if(arr[arr.length - i - 1] == 1){result += Math.pow(2, i)}  
  };
  return result;
}

// interesting stop point condition in the for loop
const binaryArrayToNumber = arr => {
    var num = 0;
    for (var i = 0, exponent = 3; i < arr.length; i++) {
      if (arr[i]) {
        num += Math.pow(2, exponent);
      }
      exponent--;
    }
    return num;
};


// that's a lot of shallow array copies
const binaryArrayToNumber = arr => 
      arr.slice()
         .reverse()
         .map((x, bitIndex) => ({isBitOn: x === 1, bitIndex}))
         .filter(x => x.isBitOn)
         .map(x => x.bitIndex)
         .reduce((acc, val) => acc + Math.pow(2, val), 0);

// interesting use of variable declaration with **2 in a for loop with the current index of i
const binaryArrayToNumber = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += 2 ** (arr.length - i - 1) * arr[i]
    }
    return sum
}

// I completely forgot you can do *= for variables. I am used to only += or -=.
const binaryArrayToNumber = arr => {

    let decimal = 0;
    let num = 1;
      
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i]){
            decimal += num;
        }
        num *= 2;
    }
    return decimal;
};

// Interesting use of concatenating
let binaryArrayToNumber=a=>+('0b'+a.join``)

// Holy Conditionals Batman!! This is crazy but it works. They are making a conditional for each interger value from 1 to 15
function binaryArrayToNumber(s) {
    if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
      return 1;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
      return 2;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
      return 3;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
      return 4;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
      return 5;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
      return 6;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
      return 7;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
      return 8;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
      return 9;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
      return 10;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
      return 11;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
      return 12;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
      return 13;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
      return 14;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
      return 15;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
      return 0;
    }
}