// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// Parameters or Edge cases: cap is the amount of people the bus can hold excluding the driver. 
//                           on is the number of people on the bus excluding the driver. 
//                           wait is the number of people waiting to get on to the bus excluding the driver.
// Return: If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Examples: cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
//           cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
// Psuedo code:  take the total amount capable that the bus can hold (cap) subtract by the current occupants on the bus (on)  to get remaining open space 
//               take the remaining space and subtract that by the people waiting to board (wait)
//               if the result is 0 or positive int then return they can fit
//               if the result is a negative int return the ABSOLUTE VALUE number of passenger he CANNOT fit

// my answer that is easy to follow with descriptive variables
function enough(cap, on, wait) {
    let spaceRemaining = cap - on
    let passengersWaiting = spaceRemaining - wait
    if(passengersWaiting >= 0){
        return 0
    }else {
        return Math.abs(passengersWaiting)
    }
}

// my one liner full codewars arrow fn with ternary and single variable representation
const enough = (cap, on, wait) => cap - on - wait >= 0 ? 0 : Math.abs(cap - on - wait)

// best practices and most clever
// This is very clever. Instead of returning a negative value of passengers not able to take, they are taking all current and waiting passengers then subracting by the total potential capacity returning a positive value of passengers waiting. Then Math.max the highest value. If there is more than enough room, subtracting by the total capacity would yield a negative value signifying there is still more room. Math.max() will take 0 instead of the negative value.
function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}

// using Math.abs and Math.max following the formula I used in my answers
function enough(cap, on, wait) {
    return Math.abs(Math.min([cap - on - wait], 0))
}

// using + which is 
// IMO very bad practice but interesting using watingPassengers > than two conditions met returning a BOOLEAN then using + to convert the value back into a positive integer representation. If the conditions are not met, it returns false and + will convert the false to 0. If both conditions are met, then returns true and + returns the POSITIVE appropriate number value similar to absolute value. Thank you MDN for urnary + additional exlpanations. 
// if instead they did -(b > s - a && b - s + a) the negative value would be returned but still convert from boolean
const enough = (s, a, b) => +(b > s - a && b - s + a)