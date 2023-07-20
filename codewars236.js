// Row Weights
/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be an array of positive integers greater than or equal to 0
    inputs will never be empty or null
*/ 

// Return:
/*
    an array of 2 integers where the first is the sum of even index elements and the second is the sum of odd index elements
*/ 

// Examples:
/*
    [80] => [80,0]
    [100,50] => [100,50]
    [50,60,70,80] => [120,140]
    [13,27,49] => [62,27]
    [70,58,75,34,91] => [236,92]
    [29,83,67,53,19,28,96] => [211,164]
    [0] => [0,0]
    [100,51,50,100] => [150,151]
    [39,84,74,18,59,72,35,61] => [207,235]
    [0,1,0] => [0,1]
*/ 

// Pseudocode:
/*
    // declare an empty integer named sum_even and set it equal to 0
    // declare an empty integer named sum_odd and set it equal to 0
    // iterate through the input array
    // if the element is at an even index add the element to sum_even
    // if the element is at an odd index add the element to sum_odd
    // return an array with the first element is sum_even and the second is sum_odd
*/ 

// my answer
function rowWeights(array){
    // declare an empty integer named sum_even and set it equal to 0
    let sum_even = 0
    // declare an empty integer named sum_odd and set it equal to 0
    let sum_odd = 0
    // iterate through the input array
    for (let i = 0; i < array.length; i++){
        // if the element is at an even index add the element to sum_even
        if (i % 2 == 0) {
            sum_even += array[i]
        }
        // if the element is at an odd index add the element to sum_odd
        else {
            sum_odd += array[i]
        }
    }
    // return an array with the first element is sum_even and the second is sum_odd
    return [sum_even, sum_odd]
}
// my answer refactored
function rowWeights(array){
    let sum_even = 0
    let sum_odd = 0
    for (let i = 0; i < array.length; i++){
        i % 2 == 0 ? sum_even += array[i] : sum_odd += array[i]
    }
    return [sum_even, sum_odd]
}

console.log(rowWeights([0])) // [0,0]
console.log(rowWeights([100,51,50,100])) // [150,151]
console.log(rowWeights([39,84,74,18,59,72,35,61])) // [207,235]
console.log(rowWeights([0,1,0])) // [0,1]

// best practices
//using .filter() filtering each array by even odd index and using .reduce() to sum them
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
}

// most clever
// arrow fn implicit return WITHOUT DECLARING CONST OR LET!
// using the third argument in .reduce() for index even or odd with modulus and adding it respectively to the array of two 0 elements
rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

// similar to most clever but using a ternary
function rowWeights(array) {
    return array.reduce(([first, second], weight, index) => index % 2 === 0
      ? [first + weight, second]
      : [first, second + weight], [0, 0]);
  }

// using .forEach instead of for loop
function rowWeights(array){
    var team1 = 0;
    var team2 = 0;
    array.forEach(function(element,index) {
      if(index % 2 == 0){
        team1 += element;
      }else{
        team2 += element;
      }
    });
    return [team1, team2];
  }