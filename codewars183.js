// Parameters or Edge Cases:
//      inputs will be a 2d array of two elements
//      1st input or number of people in the bus is always >= 0
//      return integer can't be negative
//      The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// Return:
//      number of people who are still in the bus after the last bus station (after the last array)
// Examples:
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
//            assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
//            assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
//            assert.strictEqual(number([[0,0]]),0);
//          });
//      });
  
// Psuedo Code:
//      declare a global variable for passenger count
//      loop through the 2d array or matix
//      add each 1st element pair value 
//      subtract each 2nd element pair value
//      return the integer

// my answer
function number (busStops) {
    // declare a global variable for passenger count
    var result = 0 
    // loop through the 2d array or matix
    for(let i = 0; i < busStops.length; i++) {
    // add each 1st element pair value and subtract each 2nd element pair value
        var result = result + busStops[i][0] - busStops[i][1] 
    // return the integer
    }return result
}

console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
console.log(number([[0,0]]))

// my answer refactored arrow function 
const number = (n) => {var a = 0; for(i in n){var a = a + n[i][0] - n[i][1]}return a}

// best practices and most clever
// This is very clever using .reduce() with array desctructuring the 2d array of each element array of passengers on and off.
// I also like the variable names;
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// similar to best practices and most clever but instead of desctructuring they are calling the 2d array index
const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

// 2nd best practices
// very similar to my code but they used 2 lines in the for loop
var number = function(busStops){
    var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
}

// very clever!
// using .map() for the 2d array math to return a 1d array then .reduce() on the shallow array copy
var number = function(busStops){
    return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
}

// interesting use of += -
var number = function(busStops){
    // Good Luck!
    var num=0;
    for(var i=0;i<busStops.length;i++){
        num+=busStops[i][0]-busStops[i][1]
    }
    return num;
}

// using .forEach() with destructuring
var number = function(busStops){
    let peopleInBus = 0;
    busStops.forEach(([enter, left]) => {
      peopleInBus += enter - left;
    })
    
    return peopleInBus
}

// using a nested function
const number = busStops => {
    // using .reduce() on the element index location of variable x
    // this is a great idea if there are more than 2 indexes
    // suppose you wanted to add the third index of the 2d array then you could pass in 3 in the nested function ie sumOfIndex(3)
    const sumOfIndex = x => busStops.map(arr => arr[x]).reduce((a, b) => a + b, 0);
    let enter = sumOfIndex(0);
    let leave = sumOfIndex(1);
    return enter - leave;
}