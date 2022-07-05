// Parameters or Edge cases: if nothing to sum return 0
// Return: sum of all positive numbers in an array
// Examples: [1,-4,7,12] => 1 + 7 + 12 = 20
// Psuedo code: .filter() through array for nums > 0 then .reduce() new array

//my answer
function positiveSum(arr) {
    let newArr = arr.filter((x) => x > 0 )
    if(newArr.length == 0){
      return 0
    }else{
        return newArr.reduce((acc, c) => acc + Number(c) + 0 )
    }
    
}
//similar to my answer but in 1 line
function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }

//best practices
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

//most clever initial value is a ternary
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }