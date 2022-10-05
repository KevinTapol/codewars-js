// Parameters or Edge Cases:  parameter health which will always be a whole number between -10 and 10.
// Return: return true if the player's health is greater than 0 or false if it is 0 or below.
// Examples: 
//          describe("Tests", () => {
//              it("test", () => {
//                Test.assertEquals(checkAlive(5), true)
//                Test.assertEquals(checkAlive(0), false)
//              });
//            });
// Psuedo Code: Debug code
//              

// code to debug
function checkAlive (health) {
    if () {
      health < 0
      return false
    } else () {
      return true
    }
}

// my answer before refactor
function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
}

// my answer refactored
const checkAlive = (health) => health > 0 ? true : false

// best practices and most clever
function checkAlive(health) {
    return health > 0;
}

// auto return boolean
const checkAlive = (health) => health > 0

// lol the ascii art
const checkAlive = _ => _ < 1 && '(ง ͠° ͟ل͜ ͡°)ง' < '(ง°ل͜°)ง' && '(ﾉ◕ヮ◕)ﾉ*' + '*ヽ(◕ヮ◕ヽ)'  ? !!0 : !0