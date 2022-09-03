// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// Parameters or Edge cases: The answer is always greater or equal to 0. 
// Return: return a number when input2 * 2 = input1 with both incrementing or decrementing by 1    
// Examples: NA
// Psuedo code:  use Math.abs() to return the number value with input1 - (input2 * 2)
// the reason to not take input1 / 2 is the potential output returning a float

// best practices
// using absolute value method 
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// and of course the one liner
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

// ternary
function twiceAsOld(a, b) {
    return a>2*b ? a-2*b : 2*b-a;
}

// while loop
// one while loop incrementing both variables by 1 and the other decremeting by 1 until condition met
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let dad = dadYearsOld
    let son = sonYearsOld
    let counter = 0
    while(dad/son > 2){
        dad++
        son++
        counter++
    }
    while(dad/son < 2){
        dad--
        son--
        counter++
    }
    return counter
}

// another while loop but using or in while loop with if statements for increment and decrement
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let [dad, son] = [dadYearsOld, sonYearsOld];
    let [countP, countM] = [0, 0];
    while (dadYearsOld < 100 || son > 1) {
        if (dadYearsOld++ === 2 * sonYearsOld++) return countP;
        else countP++;
        if (dad-- === 2 * son--) return countM;
        else countM++;
    }
} 