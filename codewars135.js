// Paramenters: take in two inputs first being player's current location in num and second w the dice roll 1-6 in which the player moves from the current location and repeats that movement twice
// Return: the players distance after the 2x movement diceroll as a positive integer
// Example: move(3, 6) should equal 15
// Psuedo Code: take in 2 inputs first being currentPosition and second distanceTraveling
//              multiply the distanceTraveling by 2 and add it to currentLocation
//              return the result

// my answer
function move(position, roll) {
    return roll * 2 + position
}

// my arrow fn one liner
const move = (p,r) => r*2 + p

// best practice
const move = (position, roll) => position + roll * 2

// most clever
// The bitwise NOT operator (~) inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer
// ~[] returns -1 then -~[] returns 1 so... [-~[]] is a complexe way of getting 1
// [_$=-~[],++_$] is just another way to say x = 1,++x which returns 2 so..
// const move=(currentPostion,diceRoll,unnecessaryInput3) => (currentPosition + (unnecessryInput3 = 1, ++unnecessaryInput3)(1)*diceRoll) which resolves to currentPosition + 2*diceRoll
const move=(_,$,_$)=>(_+[_$=-~[],++_$][-~[]]*$)

// someone made an answer using ternary conditional to make sure the input movment is 1-6
function move (position, roll) {
    // return the new position
    return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
}

// using spread 
// iterate through the inputs 
// take string '2' multiply by input 2 then add input 1 finally slap a + in front to convert to num
// same as const move = (...a) => Number(['2'][0]*[a][0][1]+[a][0][0])
const move = (...a) => +['2'][0]*[a][0][1]+[a][0][0]