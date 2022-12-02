// Parameters or Edge Cases:
//      given 2 inputs of arrays of strings each composed with letters from a to z
//      letters can occur multiple times and will always be lowercase
//      arrays can be empty
// Return:
//      -1 if either or both input arrays are empty
//      an integer representing the highest integer value of the largest length string in the first input array subtracted by the smallest length string in the second input AND the absolute value of the smallest string length in the first input array subtracted by the largest length string in the second input array aka max(abs(length(x)- length(y)))
// Examples:
//      a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
//      a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
//      mxdiflg(a1, a2) --> 13
// Psuedo Code:
//      declare variables for the largest and smallest length strings in each array
//      if either inputs are empty return -1
//      subtract the largest string length in the fist input array by the smallest string length in the second input array
//      take the absolute value of the result of subtracting the smallest string length in the first input array by the largest string length in the second input array
//      return the higher value integers of the two

// my answer
function mxdiflg(a1, a2) {
    // declare variables for the largest and smallest length strings in each array
    let maxLength1 = Math.max(...a1.map(e=> e.length))
    let minLength1 = Math.min(...a1.map(e=> e.length))
    let maxLength2 = Math.max(...a2.map(e=> e.length))
    let minLength2 = Math.min(...a2.map(e=> e.length))
    // if either inputs are empty return -1
    if(a1.length === 0 || a2.length === 0){
        return -1
    }else {
        // subtract the largest string length in the fist input array by the smallest string length in the second input array
        // take the absolute value of the result of subtracting the smallest string length in the first input array by the largest string length in the second input array
        // return the higher value integers of the two
        return Math.max(maxLength1 - minLength2, Math.abs(minLength1 - maxLength2))
    }
}

// my answer refactored arrow function ternary
const mxdiflg = (a,b)=>{
    let maxA = Math.max(...a.map(e=> e.length));
    let minA = Math.min(...a.map(e=> e.length));
    let maxB = Math.max(...b.map(e=> e.length));
    let minB = Math.min(...b.map(e=> e.length));
    return a1.length === 0 || a2.length === 0 ? -1 : Math.max(maxA - minB, Math.abs(minA - maxB))
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])) // 13

// best practices and most clever
// same idea as my unrefactored answer but using spread in the return instead of the declared variables
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

// returning the maths as a condtional first else return -1
const mxdiflg = (a1, a2) => {
    let array = [];
    if(a1.length && a2.length) {
      a1.forEach(str1 => a2.forEach(str2 => array.push(Math.abs(str1.length - str2.length))))
      return Math.max.apply(null, array);
    } 
    return -1;
}

// interesting use of declaring shallow array copy string length as a variable
const mxdiflg = (a1, a2)=>{
    if(a1.length == 0 || a2.length == 0) return -1
    const funcM = (x)=> x.length
    const a1Map = a1.map(funcM)
    const a2Map = a2.map(funcM)
    return Math.max(Math.max(...a1Map) - Math.min(...a2Map), Math.max(...a2Map) - Math.min(...a1Map))
}

// using sort and grab the first and last values of each array for maths
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
  
    a1.sort((a, b) => b.length - a.length);
    a2.sort((a, b) => b.length - a.length);
  
    return Math.max(a2[0].length - a1.slice(-1)[0].length , a1[0].length - a2.slice(-1)[0].length)
}

// nested for loops to check every single possible combination instead of grabbing the highest and lowest values of each array
function mxdiflg(a1, a2) {
    let maxDiff = 0
    if (a1.length === 0 || a2.length === 0){
      return -1
    }
    for (i = 0; i < a1.length; i++){
      for(j = 0; j < a2.length; j++){
        if (Math.abs(a1[i].length-a2[j].length)>maxDiff){
          maxDiff = Math.abs(a1[i].length-a2[j].length)
        }
      }
    }
    return maxDiff
}