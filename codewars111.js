// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

// Parameters or Edge cases: salary input will be an integer bonus input will be boolean
// Return: string of total figure money made
// Examples:
// Psuedo code: if bonus false return the salary input
//              if bunus is true mulitply the salary input by 10
//              return money made
//              since we are using a boolean we can use a an arrow function with a truthy ternary, but once again I'll do both answers 

// my answer easily readable
function bonusTime(salary, bonus) {
    if(bonus == false){
        return `£${salary}`
    } else {
        return `£${salary * 10}`
    }
}
// my answer using arrow fn with ternary using truthy 
// this ended up to be also most clever 
const bonusTime = (salary,bonus) => bonus ? `£${salary * 10}` : `£${salary}`

// best practices not using arrow fn but using truthy ternary
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}

// using a ternary inside the maths instead of the maths inside the ternary
function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}