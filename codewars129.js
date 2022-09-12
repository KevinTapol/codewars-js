// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// Parameters or Edge cases: input will be a positive integer
// Return: If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//         If he doesn't get 10 hoops, return the string "Keep at it until you get it".
// Examples:
// Psuedo code:  simple conditionals if input is >= 10 return success string else keep going string         

// First off I love the descriptions for this kata. Straight to the point with problem, parameters and desired outcome. I don't have to go digging through the test cases to look for them. That alone is worth an upvote. Lately, the katas have said one thing but test for another or have additional conditions hidden in the test cases.

// my answer without arrow fn and ternary
function hoopCount (n) {
  if (n >= 10){
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }
}

// my answer with arrow fn and ternary
const hoopCount = (n) => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

// best practices and most clever
function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

// checking if the input is an integer using Number object with .isInteger() method
function hoopCount (n) {
  if(Number.isInteger(n) ) {
    if(n>=10) {
      return "Great, now move on to tricks";
    } else {
      return "Keep at it until you get it";
    };
  };
}

// creating an object to use object notation for ternaries
const COUNT_AIM = 10
const HOOP_MESSAGES = {
  UNDER_AIM: 'Keep at it until you get it',
  MET_AIM: 'Great, now move on to tricks'
}

const hoopCount = count => count >= COUNT_AIM
  ? HOOP_MESSAGES.MET_AIM
  : HOOP_MESSAGES.UNDER_AIM

// testing if the input is a number
/*
 *
 *  Try to encourage Alex.
 *
 */
function hoopCount(n) {
  if (typeof n != 'number')
    return 'Please type a valid number.';
  else
    return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
}