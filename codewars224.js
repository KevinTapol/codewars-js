// Deodorant Evaporator
/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/

// Parameters or Edge Cases:
/*
    inputs will be integers 
    the first input will be an integer representing total liquid at 100%
    the second input is a percent of decay
    the third input is the percent of volume below which you are not allowed to drop
    inputs will not be empty or null
*/

// Return:
/*
    the amount of days it takes to reach below the threshold represented by the third input
*/

// Examples:
/*
    10, 10, 5 => 29
    10,10,10 => 22
*/

// Pseudocode:
/*
    // declare a variable integer named days and set it equal to 0 to represent the amount of days to reach below the threshold
    // declare a variable integer named gas and set it equal to 100 to represent 100% of the container
    // while the gas is greater than or equal to threshold
    // reassign gas to gas minus the rate of decay per day
    // add 1 to days
    // outside the for loop when the gas is less than the threshold return days
*/

// my answer and best practices
function evaporator(content, evap_per_day, threshold){ 
    // declare a variable integer named days and set it equal to 0 to represent the amount of days to reach below the threshold
    let days = 0;
    // declare a variable integer named gas and set it equal to 100 to represent 100% of the container
    let current_gas = 100;
    // while the gas is greater than or equal to threshold
    while(current_gas >= threshold){
        // reassign gas to gas minus the rate of decay per day
        current_gas -= current_gas * evap_per_day / 100;
        // add 1 to days
        days++;
    }
        // outside the for loop when the gas is less than the threshold return days
        return days;
}

console.log(evaporator(10, 10, 5)) // 29
console.log(evaporator(10,10,10)) // 22

// most clever
//  which x solves (1-evap_per_day)^x <= threshold which is equivalent to finding the logarithm with basis (1 - evap_per_day) which is (smaller or) equal to threshold
function evaporator(content, evap_per_day, threshold){ 
    threshold = threshold / 100
    evap_per_day = evap_per_day / 100
    return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
  }

// here they are destructuring an array for one line variable declarations
function evaporator( content, evap_per_day, threshold ){ 
    let [ out, part ] = [ 0, 100 ];  
    while ( part > threshold ) {
      part = part - part * ( evap_per_day / 100 );
      out += 1;
    }
    return out;
  }

// using recursion instead of a while loop
function evaporator(content, evap_per_day, threshold) {
    function recurse(pctLeft = 100, counter = 0) {
      if(pctLeft <= threshold) { return counter; }
      else { return recurse(pctLeft * (1 - evap_per_day / 100), ++counter); }
    };
    
    return recurse();
  }