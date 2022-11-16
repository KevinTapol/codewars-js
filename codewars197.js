// Parameters or Edge Cases:
//      four inputs can be floats or intergers but will be positive
//          principal - is the initial invested number
//          interest - is the rate of growth per year
//          tax - not the invested principal is taxed, but only the year's accrued interest
//          desired sum - is the amount expected    
// Return:
//      the number of years to achieve the desired sum
// Examples:
//      Let P be the Principal = 1000.00      
//      Let I be the Interest Rate = 0.05      
//      Let T be the Tax Rate = 0.18      
//      Let D be the Desired Sum = 1100.00
//      
//      
//      After 1st Year -->
//      P = 1041.00
//      After 2nd Year -->
//      P = 1083.86
//      After 3rd Year -->
//      P = 1128.30

//      describe("calculateYears", () => {
//          it("Basic tests", () => {
//            assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3)
//            assert.strictEqual(calculateYears(1000,0.01625,0.18,1200), 14)
//            assert.strictEqual(calculateYears(1000,0.05,0.18,1000), 0)
//          })
//      })
// Psuedo Code:
//      declare another input years and set it equal to 0
//      If the desired amount equals the principal return years. If not then continue.
//      declare a new variable and set it equal to the result subtract the product of principal and interest by the product of principal, interest and tax
//      call the function but with adding the accrued value to the principal and adding 1 to years creating a loop until the condition principal >= desired is reached   

// my answer
function calculateYears (principal, interest, tax, desired , years = 0){
    // If the desired amount equals the principal return 0. If not then continue.
    if(principal >= desired){
        return years
    } 
    // declare a new variable and set it equal to the result subtract the product of principal and interest by the product of principal, interest and tax
    let accrued = (principal * interest) - (principal * interest) * tax
    // call the function but with adding the accrued value to the principal and adding 1 to years creating a loop until the condition principal >= desired is reached
    return calculateYears(principal + accrued, interest, tax, desired , years + 1)
}

console.log(calculateYears(1000,0.05,0.18,1000)) // 0
console.log(calculateYears(1000, 0.05, 0.18, 1100)) // 3
console.log(calculateYears(1000,0.01625,0.18,1200)) // 14

// my answer refactored arrow function one letter variable names
// I'm still using if conditionals instead of a ternary here. Something for me to look into when I have the time.
const calculateYears = (p, i, t, d, y = 0) => {let a = (p*i)-(p*i*t);if(p >= d) {return y} return calculateYears(p +a, i, t, d, y+1)}

// best practices was a while loop
// same idea as a for loop
// declare global variable outside the loop incrementing the global variable inside the loop until the condition is met with the updated compared conditions per iteration
function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

// most clever
// Math.ceil () function always rounds up and returns the smaller integer greater than or equal to a given number.
// Math.log() function returns the natural logarithm (base e) of a number. That is ∀ x > 0 , 𝙼𝚊𝚝𝚑.𝚕𝚘𝚐 ( 𝚡 ) = ln ( x ) = the unique  y  such that  e y = x
function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / 
    Math.log(1 + interest * (1 - tax))
  );
}

// using arrow function while loop with returnin the current interation as the answer
const calculateYears = (P, I, T, D) => {
    let year = 0;
    while (P < D && ++year) P += (P * I) - (P * I * T);
    return year;
};

// separate functions one with the while loop containing the second funcion call
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired){
      years++;
      principal = getYearEndPrincipal(principal, interest, tax);
    }
    
    return years;
  }
  
  function getYearEndPrincipal(principal, interest, tax){
    const preTaxPrincipal = principal + (principal * interest);
    const taxOwed = (preTaxPrincipal - principal) * tax;
    return preTaxPrincipal - taxOwed;
}

// for loop
// here the 1 is used to express 100% plus the interest based on the interest
function calculateYears(principal, interest, tax, desired) {  
    for(var years = 0; principal < desired; years++){
      principal *= 1 + (1 - tax) * interest;
    }  
    return years  
}

// very similar to my answer
// other answers call a second function but this function calls itself with the updated variables if the conditions aren't met
const  calculateYears = (principal, interest, tax, desired , years = 0) =>{
    if(principal >= desired) return years
    let earned = (principal * interest) - (principal * interest) * tax
    return calculateYears(principal + earned, interest, tax, desired , years + 1)
}