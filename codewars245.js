// Digits explosion
/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/ 

// Parameters or Edge Cases:
/*
    inputs will be a string of numbers
    can inputs be empty or null?
*/ 

// Return:
/*
    a string with each string digit repeated it's equivalent integer value times
*/ 

// Examples:
/*
    "312" => "333122"
    "102269" => "12222666666999999999"
    "0" => ""
    "000" => ""
    "123" => "122333"
*/ 

// Pseudocode:
/*
    // declare an empty string result
    // iterate through the input string and for each element repeat it its integer value times and concat it to result
    // return result
*/ 

// my answer
function explode(s) {
    // declare an empty string result
    let result = ''
    // iterate through the input string and for each element repeat it its integer value times and concat it to result
    for (let i = 0; i < s.length; i++){
        result += s[i].repeat(Number(s[i]))
    }
    // return result
    return result
}

// my answer refactored using array methods .map()
function explode(s) {
    return s.split('').map(e => e.repeat(Number(e))).join('')
}

// my answer refactored arrow fn implicit return Codewars only
const explode = (s) => s.split('').map(e => e.repeat(Number(e))).join('')

console.log(explode("312")) // "333122"
console.log(explode("102269")) // "12222666666999999999"
console.log(explode("0")) // ""
console.log(explode("000")) // ""
console.log(explode("123")) // "122333"

// best practices 
// same as my refactored answer but using + instead of Number() to convert the string element into a number
function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
}

// most clever
// using regex .replace(target, how your changing target)
const explode = s => s.replace(/\d/g, d => d.repeat(d));

// nested for loop
function explode(s) {
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
      for (let num = s[i]; num > 0; num--) {
        newStr += s[i]
      }
    }
    return newStr
  }

// arrow fn without const let or var using [...s] to create an array of each element of the input and template literals on .join('')
explode=s=>[...s].map(n=>n.repeat(n)).join``

// for loop with conditionals for each possible single digit condition
function explode(s) {
    let arr = [];
    let split = s.split("");
    for (let item of s) {
      if (item == "1") {
        arr.push("1");
      } else if (item == "2") {
        arr.push("22");
      } else if (item == "3") {
        arr.push("333");
      } else if (item == "4") {
        arr.push("4444");
      } else if (item == "5") {
        arr.push("55555");
      } else if (item == "6") {
        arr.push("666666");
      } else if (item == "7") {
        arr.push("7777777");
      } else if (item == "8") {
        arr.push("88888888");
      } else if (item == "9") {
        arr.push("999999999");
      }
    }
    return arr.join("");
  }

// same as above but using switch case instead of if statements
function explode(s) {
    s = s.split("")
    newS = ""
    for (let i = 0; i < s.length; i++)  {
    switch(s[i]) {
      case "1":
        newS = newS +"1"
        break;
      case "2":
        newS = newS+ "22"
        break;
      case "3":
        newS = newS+ "333"
        break;
      case "4":
        newS = newS+ "4444"
        break;
      case "5":
        newS = newS+ "55555"
        break;
      case "6":
        newS = newS+ "666666"
        break;
      case "7":
        newS = newS+ "7777777"
        break;
      case "8":
        newS = newS+ "88888888"
        break;
      case "9":
        newS =newS+ "999999999"
        break;
      case "0":
        newS = newS+ ""
        break;
     } 
    }
      return newS;
    }