// Grasshopper - Check for factor

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


// Parameters or Edge cases:  base is a non-negative number, factor is a positive number
// Return: true if it is a factor or false if it is not
// Examples: 2 and 3 are factors of 6 because: 2 * 3 = 6
//           2 is not a factor of 7 because: 7 % 2 = 1
            // describe('check for factor', function () {
            // it('should return true', function () {
            //     Test.assertEquals(checkForFactor(10,2), true)
            //     Test.assertEquals(checkForFactor(63,7), true)
            //     Test.assertEquals(checkForFactor(2450,5), true)
            //     Test.assertEquals(checkForFactor(24612,3), true)
            // })
            // it('should return false', function () {
            //     Test.assertEquals(checkForFactor(9,2), false)
            //     Test.assertEquals(checkForFactor(653,7), false)
            //     Test.assertEquals(checkForFactor(2453,5), false)
            //     Test.assertEquals(checkForFactor(24617,3), false)
            // })
            // })

// Psuedo code:  Take the first input and use modulus (%) to check if the second input returns a 0 meaning no remainder.
//               If there is no remainder, return true. If there is a remainder, return false. This is perfect for falsy ternary. Since the remainder state returns a 0 falsy ternary automatically, this means we do not need to set an equal to value and type statement and instead just the factor modulus base. Might as well one line it since the description is so perfeclty clear.

// my answer no arrow fn with falsy ternary
function checkForFactor (base, factor) {
    return base % factor ? false : true
}

// my answer one liner arrow fn with falsy ternary
const checkForFactor = (base, factor) => base % factor ? false : true

// best practices using equal in value and type
function checkForFactor (base, factor) {
    return base % factor === 0;
}

// most clever
// using truthy instead of falsy with the not symbol !
const checkForFactor = (base, factor) => !(base % factor);

// interesting using Number() object and .isInteger() method meaning float answer returns false whole integer returns true
function checkForFactor (base, factor) {
    console.log(base,factor)
    
    return(Number.isInteger(base/factor))
} 

// to funny
// "We heard you like !. So we put a ! on the ! on the !" -- Xzibit Pimp My Code
function checkForFactor (base, factor) {
    return !(!!(base%factor));
}