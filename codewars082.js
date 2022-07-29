// Parameters or Edge cases: 
// Return: return true if hero has enough bullets to defeat random number input of dragons at 2 bullets each
//                  esle false
// Examples:
// Psuedo code: take input bullets and divide by 2
//              compare value with number of dragons
//              if number is greater or equal to number of dragons return true
//              else return false

//my answer
function hero(bullets, dragons){
    return (bullets /2) >= dragons ? true: false
}

//Something I commonly forget about is that you can submit true/false as return statments directly without needing to display false ie return maths implied true else false
//best practices and most clever
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }