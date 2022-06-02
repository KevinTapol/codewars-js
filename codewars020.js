// Parameters or Edge cases:
// Return: Array.isArray() is false return "It's a fake array" 
            //if arr contains elements 5 & 13 return "It's a black array" 
            //if arr contains neither 5 nor 13 return "It's a white array"
//Examples: blackAndWhite(5,13) should return "It's a fake array"
            //blackAndWhite([5,13]) should return "It's a black array"
            //blackAndWhite([5,12]) should return "It's a white array"
// Psuedo code: arrow function template literals ternary operators with a nested ternary operator in false statement including another ternary operator with a true and false

//ternary operator with template literals
//includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//(true condition) if not an array is true return fake ? `fake` : (false condition)if array contains elements 5 && 13 ? (true condition) `black` : (false condition) return `white`
const blackAndWhite = arr =>
  `It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;

//answer of best practices: 
//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//if arr is not an array return fake
//if arr does not have elements 5 && 13 return "It's a black array" else return "It's a white array"
function blackAndWhite(arr){
    if ( !Array.isArray( arr ) ) return 'It\'s a fake array'
    if ( arr.indexOf( 5 ) != -1 && arr.indexOf( 13 ) != -1 ) return 'It\'s a black array'
    return 'It\'s a white array'
  }

//simple if, else if, else
  function blackAndWhite(arr){
    //coding here...
    if (!Array.isArray(arr)) {
      return "It's a fake array";
    }
    else if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
      return "It's a black array";
    }
    return "It's a white array";
  }