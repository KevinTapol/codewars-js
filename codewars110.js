// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// Parameters or Edge cases:
// Return: true if employed and not on vacation else false
// Examples: setAlarm(true, true) -> false
//           setAlarm(false, true) -> false
//           setAlarm(false, false) -> false
//           setAlarm(true, false) -> true
// Psuedo code:  If first input is true and second input is false then return true else return false. These are the rare occations where using arrow function and a ternary would be IMO best practices because it's straightforward.

// my arrow fn ternary answer
const setAlarm = (employed, vactaion) => employed == true && vactaion == false ? true : false

// my answer if more complicated down the road
function setAlarm(employed, vacation){
    if(employed = true && vacation ==false){
        return true
    } else {
        return false
    }
}

// best practices and most clever 
// The same as my answer except they used truthy instead of boolean == statements
const setAlarm = (employed, vacation) => employed && !vacation;

// clever answer
// Uses greater than on boolean values. I didn't know you could use greater than or less than for boolean values and thats precisely why I love reviewing fellow coders code.
function setAlarm(employed, vacation){
    return employed > vacation
}