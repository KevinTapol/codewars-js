// Parameters or Edge Cases:
//      inputs two integers a and b, which can be positive or negative
//      If the two numbers are equal return a or b.
// Return:
//      the sum of all the integers between and including
// Examples:
//      (1, 0) --> 1 (1 + 0 = 1)
//      (1, 2) --> 3 (1 + 2 = 3)
//      (0, 1) --> 1 (0 + 1 = 1)
//      (1, 1) --> 1 (1 since both are same)
//      (-1, 0) --> -1 (-1 + 0 = -1)
//      (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Psuedo Code:
//      create an array starting at input 1 and ending at input 2
//      if input 1 is is less than input 2 create an array increasing in value by 1 
//      if input 1 is more than input 2 create an array decreasing in value by 1
//      add all the values in the array and return the sum

// my answer
function getSum( a,b ) {
    let arr = []
    if(a < b) {
        for(let i = a; i <= b; i++){
            arr.push(i)
        } return arr.reduce((acc,c) => acc + c)
   } else if (a > b) {
        for(let i = a; i >= b; i--) {
            arr.push(i)
        } return arr.reduce((acc,c) => acc + c)
   } else {
        return a
   } 
}

// best practices and most clever
// arrow function declaring 2 extra parameters taking the smallest and largest value of the inputs then use the algorithm (max - min + 1) * (min + max) / 2
const GetSum = (a, b) => {let min = Math.min(a, b), max = Math.max(a, b);return (max - min + 1) * (min + max) / 2;}

// one liner arrow function with 2 additional parameters taking the smallest value and the largest value of the user inputs then use the algorithm (y-x+1)*(x+y)/2
const GetSum= (a, b, x=Math.min(a,b), y=Math.max(a,b)) => (y-x+1)*(x+y)/2

// using Math.abs with the same algorithm
function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

// Math.abs one liner
const GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;

// separating out when user inputs are equal or less than eachother
function GetSum( a,b ){
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

// clean for loop
function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
}

// while loop 
// strange no {} around while statement
function GetSum( a,b ) {
  tmp = 0;
  if(a < b)
    while(a <= b) tmp += a++;
  else
    while(a >= b) tmp += a--;    
  return tmp;
}

// clever while loop
function GetSum( a,b ){
  var sum=0;
  while(a!== b){
    sum+= a<b?a++:b++;
  }
  return sum+a;
}

// cleaner version similar to my code
function GetSum( a,b ) {
//if both a and b are equal return a
   if(a===b){
     return a;
   }
   var result = 0;
   
   var x = a, y = b;
 // check the larger and smaller numbers and assign them to x and y
   if(a > b) {
      x = b, y = a;
   }
 //in a loop add the numbers from the smaller one until it reaches the larger number
   for(var i = x; i <=y; i++ ) {
     result += i;
   }
   return result;  
}

// using Array.from()
// declaring the length of the array as b >= a ? b-a+1 : a-b+1
function getSum( a, b ){
    return Array.from({length: b >= a ? b-a+1 : a-b+1}, (_, i)=> b >= a ? i+a : i+b).reduce((a, b)=> a + b, 0)
}