// Parameters or Edge cases: humanYears >= 1 humanYears are whole numbers only
//          Cat Years
//          15 cat years for first year
//          +9 cat years for second year
//          +4 cat years for each year after that
//          Dog Years
//          15 dog years for first year
//          +9 dog years for second year
//          +5 dog years for each year after that
// Return: an array first element input with their respective ages now as [humanYears,catYears,dogYears]
// Examples:
//          describe("Example Tests", function() {
//              it("one", function() {
//                  Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//              });
//              it("two", function() {
//                  Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//              });
//              it("ten", function() {
//                  Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//              });
//          });
// Psuedo code:  take the input if the input is 1 return 15 for both cat and dog
//               if the input is 2 return 24 for both cat and dog
//               if the input is 3 or greater for cat add 4 per each additional year and 5 for dog 


// my answer easy to follow 
function humanYearsCatYearsDogYears (human) {
    if(human === 1) {
        return [1,15,15]
    } else if(human === 2) {
        return [2,24,24]
    } else {
        
        return [human,24 + (human - 2)*4, 24 + (human - 2)*5]
    }
}
console.log(years(1))
console.log(years(2))
console.log(years(10))

// my one liner arrow fn into nested ternaries
const humanYearsCatYearsDogYears = (h) => h === 1 ? [1,15,15] : h === 2 ? [2,24,24] : [h,24 + (h - 2)*4, 24 + (h - 2)*5]

// best practices 
// similar to my first answer for easily readable  but using only if statements
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

// most clever
// returning an array with the maths being calculated inside their own elements
// using falsy and truthy ternaries
// this is very clever
// say input is 1 then -1 would be 0 leading to falsy take the value after the colon add complete the remaining function
// say input is 2 then -1 would be 1 leading to truthy take the first value after the ternary ? then complete the remaining function
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];

// simple for loop
// declare variables outside the loop
// manipulate the variables inside the loop
// return the varibales outside loop
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        }
        else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        }
        else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears,catYears,dogYears];
}

// switch case
// same as my if else first answer but using switch case
function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
        case 1:
            return [1, 15, 15]
        case 2:
            return [2, 24, 24];
        default:
            return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
}