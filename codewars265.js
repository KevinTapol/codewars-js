/*
Parameters or Edge Cases:
    inputs will be integers greater than or equal to 0
Return:
    an integer representing the time it takes to boil the input integer amount of egg(s)
Examples:
    (cookingTime(0), 0, '0 eggs');
    (cookingTime(5), 5, '5 eggs');
    (cookingTime(10), 10, '10 eggs')
Pseduocode:
    Rules : you can put at most 8 eggs in a pot
            it takes 5 minutes to boil an egg
            assume that the water is boiling all the time meaning no heat up time
            do not consider the time it takes to put remove the eggs
    take the input integer, divide by 8, round up, multiply by 5 and return the product
    
*/

// My Answer, Best Practices and Most Clever
function cookingTime(eggs) {
    return Math.ceil(eggs/8)*5
}

// Might as well one line it with an arrow fn
const cookingTime = (e) => Math.ceil(e/8)*5

console.log(cookingTime(0)) // 0
console.log(cookingTime(5)) // 5
console.log(cookingTime(10)) // 10

// for loop incrementing by 8 eggs per batch
function cookingTime(eggs) {
    var min = 0;
    for (var i = 0; i < eggs; i += 8)
      min += 5;
    return min;
}

// while loop
function cookingTime(eggs) {
    let time = 0
    
    while(eggs >= 8){
      time += 5
      eggs -= 8
    }
   if( eggs > 0 && eggs < 8){
       time += 5;
     }
     return time
}