// Parameters or Edge cases: input is an array of numbers empty arrays should return 0
// Return:
// Examples:
// Psuedo code: add up all the numbers with .reduce method and divide by the length of the array


//my answer
function find_average(array) {
    if(array.length === 0){
        return 0;
    }else {
        let sum = array.reduce((acc, c) => acc + c)
        return sum/array.length
    }
    
}

//best practices and most clever
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

//using Math object methods
function find_average(array) {
    return (Math.min(...array) + Math.max(...array)) / 2;
  }