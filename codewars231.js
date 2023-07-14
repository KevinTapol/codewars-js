// Power of two 
/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/ 

// Parameters or Edge Cases:
/*
    inputs will be non-negative integers greater than or equal to 0
    inputs will always be valid and not empty or null
*/ 

// Return:
/*
    boolean true if the input is a power of 2 else false
*/ 

// Examples:
/*
    2 => true
    4096 => true
    5 => false
*/ 

// Pseudocode:
/*
    // declare a variable exp and set it equal to 0 
    // create an infinite while loop with while (true)
    // if 2^exp is greater than the input return false
    // if 2^exp is equal to the input integer return true
    // increment exp by 1
*/ 

// my answer
function isPowerOfTwo(n){
    // declare a variable exp and set it equal to 0
    let exp = 0
    // create an infinite while loop with while (true)
    while (true) {
        // if 2^exp is greater than the input return false
        if (2**exp > n) {
            return false
        // if 2^exp is equal to the input integer return true
        } if (2**exp == n) {
            return true
        // increment exp by 1
        }exp += 1   
    }
} 

console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(4096)) // true
console.log(isPowerOfTwo(5)) // false

// best practices
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    
}

// most clever
// hilarious imo using == to implicitly return boolean true/false where x is equal to a power of 2
function isPowerOfTwo(x){
    return (
    x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 ||
    x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 ||
    x == 2048 || x == 4096 || x == 8192 || x == 16384 ||
    x == 32768 || x == 65536 || x == 131072 || x == 262144 ||
    x == 524288 || x == 1048576 || x == 2097152 ||
    x == 4194304 || x == 8388608 || x == 16777216 ||
    x == 33554432 || x == 67108864 || x == 134217728 ||
    x == 268435456 || x == 536870912 || x == 1073741824 ||
    x == 2147483648);
 }

// similar to most clever of creating an array of powers of 2 and checking if n exists in the array
const isPowerOfTwo = (n) => [...Array(100).keys()].map(el=> 2**el).includes(n)

// same idea as above but using Array.from() but only generating by length of 50
function isPowerOfTwo(n){
    const arr = Array.from({length: 50}, (a,b)=> b)
    return arr.map(item=> 2**item).includes(n)
  }

/* The single ampersand is called the Bitwise AND operator. It converts the surrounding operands to 32-bit integers & compares their binary values.
The reason this solution works is leveraging this behavior with 2 bits of logical knowledge:
Any power of 2 will be represented in binary by exactly ONE '1' bit, and the remaining bits will be zeros
Any power of 2 MINUS 1 will be ALL 1s behind the power that we're looking for.
*/
function isPowerOfTwo(n) {
    return n === 0 ? false : (n & (n - 1)) == 0
  }

// recursion conditionals instead of a while loop
function isPowerOfTwo(n){
    if(n == 1)
      return true
    if(n < 1)
      return false
  
   return isPowerOfTwo(n / 2)
  
  }

// similar to my while loop answer but using a ternary for true false
function isPowerOfTwo(n){
    let i = 0;
    while(2**i < n){i++}
      return (2**i == n) ? true : false;
    }

// using regex
function isPowerOfTwo(n){
    return /^10*$/.test(n.toString(2));
  }