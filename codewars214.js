// Parameters or Edge Cases:
//      intput will be an array of intergers
// Return:
//      return a new array from the intput array of even integers 0 inclusively
// Examples:
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            assert.deepEqual( noOdds( [0,1] ), [0] )
//            assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
//            })
//      })
// Psuedo Code:
//      iterate through the array of integers and filter all the intergers that have no remainder whey divided by 2
//      return the filtered array

// my answer
function noOdds(array){
    // iterate through the array of integers and filter all the intergers that have no remainder whey divided by 2 and return the filtered array
    return array.filter(e => e % 2 === 0)
}

// my answer refactored arrow function
const noOdds = (a) => a.filter(e => e % 2 === 0)

console.log(noOdds([0,1])) // [0]
console.log(noOdds([0,1,2,3])) // [0,2]

// best practiced and most clever
// higher order functions are the most popular answers submitted instead of a simple .filter() method
// using a higher order function to filter by values that have no remainder when divided by 2
function noOdds( values ){
    function isEven(number){
      return number%2 == 0;
    }
    
    return values.filter(isEven);
}

// another higher order function
function noOdds( values ){
    // Return all non-odd values
    return values.filter(function(data){
      return data % 2 === 0
    });
}

// filter by all values that have remainders then using a ! to say not
function noOdds( values ){
    return values.filter(x => !(x % 2));
}

// classic brute force for loop
function noOdds( values ){
    // Return all non-odd values
    var goodies = [];
    for(var i=0; i<values.length;i++){
        if(values[i]%2 == 0){
          goodies.push(values[i]);
        }
    }
    
    return goodies;
}

// using regex .match() to create an array per element and .map()
function noOdds( values ){
    return values.join('').match(/[24680]+/gm).map(Number)
}