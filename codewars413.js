/*
Paul's Misery

Parameters or Edge Cases:
    inputs will be an array of strings of upper and lowercase characters

Return:
    return the sum range score of the input arrays strings based on the string words that have a value 

Examples:
    kata = 5
    Petes kata = 10
    life = 0
    eating = 1
    The Misery Score is the total points gained from the array. Once you have the total, return as follows:

    < 40 = 'Super happy!'
    < 70 >= 40 = 'Happy!'
    < 100 >= 70 = 'Sad!'
    > 100 = 'Miserable!'

    ['life', 'eating', 'life'] --> 'Super happy!'
    ['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating'] --> 'Super happy!'
    ['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating'] --> 'Happy!'

Pseudocode:
    create an object of key strings that have values named obj
    declare an integer score and set it equal to 0
    iterate through the input array and call the obj on the current element
        if the return is not undefined then add the result to sum
    if sum is 
        < 40 return 'Super happy!'
        < 70 >= 40 return 'Happy!'
        < 100 >= 70 return 'Sad!'
        > 100 return 'Miserable!'


*/

// My Answer Brute force for loop and conditionals
// function paul(x){
//     let obj = {
//         'kata' : 5 ,
//         'Petes kata' : 10 ,
//         'eating' : 1
//     }
//     let sum = 0
//     for(let e of x){
//         if(obj[e] != undefined){
//             sum += obj[e]
//         }
//     }

//     if(sum < 40){
//         return 'Super happy!'
//     }
//     if(sum < 70){
//         return 'Happy!'
//     }
//     if(sum < 100){
//         return 'Sad!'
//     }
//     if(sum > 100){
//         return 'Miserable!'
//     }
// }

// My Answer .map() and ternary conditionals
// function paul(x){
//     let obj = {
//         'kata' : 5 ,
//         'Petes kata' : 10 ,
//         'eating' : 1
//     }
//     let sum = 0
//     x.map(e => obj[e] != undefined ? sum += obj[e] : "")

//     return sum < 40 ? 'Super happy!' : sum < 70 ? 'Happy!' : sum < 100 ? 'Sad!' : 'Miserable!'
// }

// My Answer .reduce() and ternary
function paul(x){
    let obj = {
        'kata' : 5 ,
        'Petes kata' : 10 ,
        'eating' : 1
    }
    let sum = x.reduce((acc, c) => obj[c] != undefined ? acc + obj[c] : acc + 0, 0)

    return sum < 40 ? 'Super happy!' : sum < 70 ? 'Happy!' : sum < 100 ? 'Sad!' : 'Miserable!'
}

// My Answer .reduce() ternary return one liner arrow fn
const paul = (x, obj = {'kata': 5, 'Petes kata': 10, 'eating' : 1}, sum = x.reduce((acc, c) => obj[c] != undefined ? acc + obj[c] : acc + 0, 0)) => sum < 40 ? 'Super happy!' : sum < 70 ? 'Happy!' : sum < 100 ? 'Sad!' : 'Miserable!'


console.log(paul(['life', 'eating', 'life'])) //'Super happy!'


// Best Practices
function paul(arr){
    const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
    const num = arr.reduce( (a, i)=> +a + dic[i], 0)
    return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
}

// Most Clever
function paul(activities) {
    const VALUES = {'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0};
    const score = activities.reduce((s, a) => s + VALUES[a], 0);
    switch (true) {
      case score < 40: return 'Super happy!';
      case score < 70: return 'Happy!'
      case score < 100: return 'Sad!';
      default: return 'Miserable!';
    }
}

// similar to my .reduce but cleaner
paul = x => {
    const score = x.map(x => ({ kata: 5, 'Petes kata': 10, life: 0, eating: 1 }[x])).reduce((p,c) => p+c)
    return score < 40 ? 'Super happy!' : score < 70 ? 'Happy!' : score < 100 ? 'Sad!' : 'Miserable!'
  }