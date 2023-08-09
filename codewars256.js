// Speed Control
/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
With the above data your function gps(s, x) should return 74

Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.
*/ 

// Parameters or Edge Cases:
/*
    first input will be a positive integer greater than 0 representing speed in seconds
    second input will be an array of floats representing the distance traveled per s input from element to element
    the input array can be empty or null
*/ 

// Return:
/*
    if the length of the input array x is less than or equal to 1 then return 0
    else return the max hourly average speed traveled from element to element
*/ 

// Examples:
/*
    15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25] => 74
    19, [] => 0
*/ 

// Pseudocode:
/*
    // if the length of the input array x is less than or equal to 1 return 0
    // create an empty array named hourly_ave_speed
    // iterate through input array x going the length of the array -1 because we are comparing the next value and the final value of the array doesn't have a next value
    // Take the next element and subtract it by the current element. Multiply the difference by 3600, divide by s, round down to the nearest integer and push the result to hourly_ave_speed array.
    // return the max value of hourly_ave_speed using a spread operator to iterate through the array
*/ 

// my answer
function gps(s, x) {
    // if the length of the input array x is less than or equal to 1 return 0
    if (x.length <= 1) {
        return 0
    }
    // create an empty array named hourly_ave_speed
    let hourly_ave_speed =[]
    // iterate through input array x going the length of the array -1 because we are comparing the next value and the final value of the array doesn't have a next value
    for (let i = 0; i < x.length -1; i++){
        // Take the next element and subtract it by the current element. Multiply the difference by 3600, divide by s, round down to the nearest integer and push the result to hourly_ave_speed array.
        hourly_ave_speed.push(Math.floor( ((x[i+1] - x[i])*3600)/s ))
    }
    // return the max value of hourly_ave_speed using a spread operator to iterate through the array
    return Math.max(...hourly_ave_speed)
}

// my refactored answer putting the test case of the length of the input array being equal to or less than 1 return 0 in the final return statement as a ternary
function gps(s, x) {
    let hourly_ave_speed =[]
    for (let i = 0; i < x.length -1; i++){
        hourly_ave_speed.push(Math.floor( ((x[i+1] - x[i])*3600)/s ))
    }
    return x.length <= 1 ? 0 : Math.max(...hourly_ave_speed)
}

// my answer refactored using array methods
function gps(s, x) {
    let hourly_ave_speed = x.map((e, i, x ) => Math.floor(((x[i+1] - x[i])*3600)/s)).slice(0, -1)
    return x.length <= 1 ? 0 : Math.max(...hourly_ave_speed)
}

// my answer refactored using array methods arrow fn implicit return
const gps = (s,x) => x.length <= 1 ? 0 : Math.max(...x.map((e, i, x ) => Math.floor(((x[i+1] - x[i])*3600)/s)).slice(0, -1))

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])) // 74