// Parameters or Edge cases: round to the smallest value (round down) with 0.5 litres per hour
// Return: litres of water 
// Examples: time = 3 ----> litres = 1
            //time = 6.7---> litres = 3
            //time = 11.8--> litres = 5
// Psuedo code: take input integer of hours 
                //multiply by 0.5 and round down to a solid integer with Math.floor()

//my answer and best practices                
function litres(time) {
    return Math.floor(time*0.5)
}

//using parseInt()
function litres(time) {
    return parseInt(time/2);
  }