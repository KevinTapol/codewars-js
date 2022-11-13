// Paramters or Edge Cases:
//      Input will always be a non-negative integer.
//      If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split).
// Return:
//      minimum number of breaks to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable.
// Examples:
//      For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// Psuedo Code:
//      multiply the length by the width and subtract by 1
//      if the answer is less than 0 return 0 else return the answer

// my answer
function breakChocolate(n,m) {
    if((n * m) - 1 < 0){
        return 0
    } else {
        return n * m - 1
    }
}

// my answer refactored arrow function ternary
const breakChocolate = (n,m) => n * m - 1 < 0 ? 0 : n * m - 1

// best practices and most clever
// declaring the function as a global and using a ternary
var breakChocolate = function(n, m) {
    return (n*m === 0) ? 0 : n * m - 1;
};

// conditional return without using else
var breakChocolate = function(n, m) {
    if(n === 0 || m === 0) return 0
    return n*m - 1;
};

// very clever to use Math.max() for conditionals
var breakChocolate = function(n, m) {
    return Math.max(0, m*n - 1);
};

// nice display breakdown
var breakChocolate = function(n, m) {
    // input is invalid if either input is less than 1
    if ( n < 1 || m < 1 ) {
      return 0;
    }
    
    /* Some example cases to spot the pattern: 
    
    2 x 1  2 x 2   2 x 3     2 x 4       2 x 5         2 x 6           2 x 7     
      _     _ _    _ _ _    _ _ _ _    _ _ _ _ _    _ _ _ _ _ _    _ _ _ _ _ _ _ 
     |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
     |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
                                     
      1      3       5         7           9             11              13
   
   Minimum breaks = ( rows x columns ) - 1
      */
      return (m * n) - 1;
   };

// returning the conditionals as or statments
var breakChocolate = function(n, m) {
    return (n||1) * (m||1) - 1;
};

// while loop
function breakChocolate(n,m) {
    let mybreaks = 0;
    let quadrad = n * m;
    while (quadrad> 1){
    quadrad -=1
      mybreaks +=1
    }
    return mybreaks;
}

// the conditional return for values less than 0 and NaN
var breakChocolate = function(n, m) {
    var result = ((n - 1) * m) + (m - 1);
    if (isNaN(result) || n < 0 || m < 0 || result < 0)
      return 0;
    return result;
};