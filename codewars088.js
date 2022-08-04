// Parameters or Edge cases: provided value can be string or num 
// Return: true if array contains value falst if not
// Examples:
// Psuedo code: loop through the array to check if each element of the array is == in value to x
//              use a ternary x == element return true else false
//   

//I brain farted on this for a while
// the reason this doesn't work is in the for loop i'm checking the first element for true or false and not the entire array. I need to check for the value if it is true then move on. Once I am through the array elements and there is no value equal to x then AND ONLY THEN return false.
// stops at 1st element boolean
function check(a, x){
    for(let i = 0; i < a.length; i++){
        if(x == a[i]){
            return true
        } else {
            return false
        }
    }
}

//my answer
function check(a,x){
    for(let i = 0; i < a.length; i++){
      if(a[i] == x){
        return true
      }
    }return false
  };

// best practices and most clever
const check = (a,x) => a.includes(x);