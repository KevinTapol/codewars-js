// Parameters or Edge cases:
// Return: true or false
// Examples: You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.
// Psuedo code: take 25miles multiply by variable how many gallons left
//              if destination is less than or equal to the product return true else false

//my answer
function zeroFuel(miles, milesPerGallon, gallons){
    let capableDistance = milesPerGallon*gallons
    if(miles <= capableDistance){
        return true
    } else {
        return false
    }
}

// best practices and most clever
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
};

// funny using underscores as variables
zeroFuel = (_,__,___) => ___*__>=_