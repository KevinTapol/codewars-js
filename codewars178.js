// Parameters or Edge Cases:
//      1
//      3     5
//      7     9    11
//      13    15    17    19
//      21    23    25    27    29
//      31    33    35    37    39    41
//      ...
// Return:
//       sum of the numbers in the nth row of this triangle (starting at index 1)
// Examples:
//      describe("Basic tests", () => {
//        it("Testing for fixed tests", () => {
//          assert.strictEqual(rowSumOddNumbers(1), 1);
//          assert.strictEqual(rowSumOddNumbers(42), 74088);
//        });
//      });
// Psuedo Code:
//      (row number * (row number -1)) + 1 = first index element
//      ex row number 5 
//      (5 * (5 - 1)) + 1 = 21
//      use the formula to get the first index of the array based on the row number
//      create an array with the length being the row number and each element in the array being the formula added to the product of 2*index
//      take the array and use .reduce() to add up all the elements and return that sum

// my answer
function rowSumOddNumbers(n) {
    // using the formula to get the first index of the array based on the row number
    const firstValue = (n * (n -1)) + 1
    // using Array.from() to create an array with the length being the row number and each element in the array being the formula added to the product of 2*index
   let arr = Array.from({length: n}, (e,i) => firstValue + 2*i)
    // take the array and use .reduce() to add up all the elements and return that sum
   return arr.reduce((acc,c) => acc +c)
}
console.log(rowSumOddNumbers(5))
console.log(rowSumOddNumbers(42))

// best practices and most clever
// simple algorithm using odd number pascal's triangle
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

// an answer with very descriptive formulas reducing down to n^3
// here they start with a different forumla than mine
function rowSumOddNumbers(n)
{
  /* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
  return n * n * n;
}

// brute forcing for loop with the formula
function rowSumOddNumbers(n) {
    var start = n * n - n + 1;
    var result = 0;  
    
    for(i = 0; i < n; i++)
    {
      result =  result + (start + (i*2));
    }
      
     return result;
}

// creating an array similar to mine but defining the length using the formula then generating an odd number array starting at 1 and ending when they reach the defined formula length with the row input number
// they then .slice() to start the array at the array length - row number aka input and then using .reduce()
function rowSumOddNumbers(n) {
    const out = Array.from( {length: n*(n+1)/2}, (_,i) => i * 2 + 1 );
    return out.slice( out.length - n ).reduce((a, b) => a + b, 0)
}

// one liner of above answer
const rowSumOddNumbers = (n) => Array.from({length: n*(n+1)/2}, (_, i) => i*2+1).slice(-n).reduce((a, b)=> a + b, 0)

// brute force for loop that used the same formula I did
function rowSumOddNumbers(n) {
    var first = (n*(n-1)) + 1;
    var result = 0;
    for (i = 0; i < n; i++) {
      result += first;
      first += 2;
    }
    return result;
}

// very desriptive brute force with if statements and for loops
function rowSumOddNumbers(n) {
    if(n==1)
      return 1;
      
    var prevRowSum = 0;
    var numRow = [];
    var oddNumbers = [];
    var sumResult = 0;
    
    // Get all odd numbers up to current row
    for(x=1;x<=n;x++)
    {
      if(x==1)
      {
        prevRowSum = 1;
        numRow.push(prevRowSum);
      } else {
        numRow.push(prevRowSum + x);
        prevRowSum = prevRowSum + x;
      }
    }
    
    // save all odd numbers up to Row
    for (var x=1; x < numRow[numRow.length-1]*2; x+=2)
      oddNumbers.push(x);
    
    // Reverse the Array
    oddNumbers.reverse();
    
    // Add all Odd numbers on that Row
    for(var p=0;p<n;p++)
      sumResult += oddNumbers[p];
    
    return sumResult;
}