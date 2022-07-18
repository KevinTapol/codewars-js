// Parameters or Edge cases: all inputs are positive non-zero digits
// Return: return boolean if num1 is divisible by both num2 and num3
// Examples: 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
            //2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
            //3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
            //4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
// Psuedo code: if quotient of num1 % num2 and quotient of num1 % num3 equals 0 return true else false

//my answer
function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
        return true
    }else {
        return false
    }
}

//best pracitces
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

//most clever
function isDivisible(n, x, y) {
    return !(n%x||n%y)
}

//using the spread 
function isDivisible(n, ...dividers) {
    return dividers.every(divider => n % divider == 0)
}

//ternary
function isDivisible(n, x, y) {
    return true ? ((n % x == 0) && (n % y == 0)) : false; 
}