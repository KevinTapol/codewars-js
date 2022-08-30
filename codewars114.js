// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// Parameters or Edge cases: inputs will be floats and >=0 
// Return: an integer rounded down
// Examples: 1.08 --> 30
// Psuedo code:  take in float input and multiply by 1000 then divide b 36 to go from km to cm
//               take that float and round down using Math.floor() and return
//               might as well arrow fn since it's so simple

// my answer not using arrow fn
function cockroachSpeed(s) {
    return Math.floor(s*1000/36)
}

// my arrow fn answer
const cockroachSpeed = s => Math.floor(s*1000/36)

// best practices
// only difference is they divided the fraction 1000/36 by 1000 to get 0.036
const cockroachSpeed = s => Math.floor(s / 0.036);

// 2nd best practices
// using variables to show conversions
function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
}

// another one
// I think this should be best practices since they are using variable names to explain the conversions and showing the conversion breakdown
function cockroachSpeed(s) {
    const KILOMETER_IN_CENTIMETERS = 1 * 1000 * 100;
    const HOUR_IN_SECONDS = 1 * 60 * 60;
    
    return Math.floor(s * KILOMETER_IN_CENTIMETERS / HOUR_IN_SECONDS);
}

// using scientific notation 
const cockroachSpeed = s => s / 3.6e-2 ^ 0;

// another scientific notation
function cockroachSpeed(s) {
    return Math.floor(s / 3600 * 1e+5);
}

// using bitwise operator ~~ instead of Math.floor()
// apparently works faster than Math.floor() but ~~ doesn't play well with negative numbers and will return NaN if 0
// I understand the appeal to use bitwise operator shortcuts for simple code positive numbers less than 32-bit ints but I would rather use Math.floor() for accuracy unless speed was a severe factor.
const cockroachSpeed = s => ~~(27.777778*s);

// using |0 instead of Math.floor() another bitwise operator shortcut but less accurate similar to ~~
function cockroachSpeed(s) {
    return s / 0.036 | 0
}