// Parameters or Edge cases: if multiple by both 3 and 5 count it only once
// Return: the sum of the numbers that are multiples of 3 and 5 up to the input parameter
// Examples: 10 => 3,5,6,9 = 23
// Psuedo code: for loop with conditional of divisible by 3 and not 5, divis by 5 and not 3, divis by 3 and 5 
                //push nums into an array and use .reduce()

//my answer
function solution(number){
    let arr = [0]
    for(let i = 0; i < number; i++){
        
        if(i % 3 == 0 && i % 5 != 0){
            arr.push(i)
        }else if(i % 5 == 0 && i % 3 != 0){
            arr.push(i)
        }else if(i % 3 == 0 && i % 5 == 0){
            arr.push(i)
        }
    }return arr.reduce((acc,c) => acc + Number(c) + 0)
}

//best practices
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }

//most clever
function solution(number){
    var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
  }