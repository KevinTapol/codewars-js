// Parameters or Edge Cases:
//      both inputs will be integers and can be negative
//      the first input will always be less than the second input
// Return:
//      the number of integers incrementing by 1 starting at the first input to the second input omitting 5
// Examples:
//      1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
//      4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// Psuedo Code:
//      declare a count variable and set it to 0
//      loop through the numbers starting at the index of start and ending at the index of end incrementing by 1
//      convert each individual integer into a string and if it does not include 5 add 1 to the count variable
//      outside of the for loop return the count 

// my answer
function dontGiveMeFive(start, end){
    // declare a count variable and set it to 0
    let count = 0
    // loop through the numbers starting at the index of start and ending at the index of end incrementing by 1
    for(let i = start; i <= end; i++){
    // convert each individual integer into a string and if it does not include 5 add 1 to the count variable    
         if(i.toString().includes(5) === false){
            count += 1
         }
    // outside of the for loop return the count     
    }return count
}

//test cases
console.log(dontGiveMeFive(1,9)) // 8
console.log(dontGiveMeFive(4,17)) // 12
console.log(dontGiveMeFive(1,90)) // 72
console.log(dontGiveMeFive(-4,17)) // 20
console.log(dontGiveMeFive(-4,37)) // 38
console.log(dontGiveMeFive(-14,-1)) // 13
console.log(dontGiveMeFive(-14,-6)) // 19

// my answer refactored arrow function
const dontGiveMeFive = (s,e) =>{let c=0;for(let i=s;i<=e;i++){if(i.toString().includes(5)===false){c+=1}}return c}

// best practices and most clever 
// using regex with .test()
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
}

// using .includes() but pushing to an array then returning the length of the array
function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}

// similar to my answer except the are declaring the global count variable in the for loop and using an or statement
dontGiveMeFive = (s,e) => {
    for (var cnt = 0;s <= e;++s)
      (s+'').includes('5') || cnt++
    return cnt 
}

// using Array.from() then .filter() where each element doesn't have 5 and returning the length of the array
function dontGiveMeFive(start, end){
  return Array.from(Array(end-start+1),(e,i)=>i+start).filter((e)=>(''+e).indexOf('5')===-1).length;
}

// a do while loop with break statements
function dontGiveMeFive(start, end) {
    let count = 0;
    do {
      let c = Math.abs(start);
      do {
        if (c % 10 != 5) {
          c = parseInt(c/10);
          if (c <= 1) {
            count++;
            break;
          }
        } else {
          break;
        }
      } while (true);
      start++;
    } while (start <= end);
    return count;
}

// very clever imo
//  here they are using spread and array to iterate through each element then .reduce() to add up the number of elements that do not contain 5
const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)

// similar to my answer but instead of using .includes() return false they used the .indexOf() not exist return of -1
function dontGiveMeFive(start, end)
{
  // HELLO STREAMERS!
  //P: positive or negative number; 'start' and 'end'; inclusive
  //R: positive integer = count of numbers
  //E: dontGiveMeFive(4, 17) -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
  //P: 
  //create variable holding count total
  //create loop, from 'start' to 'end', use <= because it's inclusive
  //if (number DOESN'T have a 5 in it), {add one to 'count'}
      //number doesn't have to remain a number, so can convert to String and use indexOf()
      //indexOf() returns -1 if the character is not present,
      //therefore we WANT a -1 value if '5' is not found in the string
  let count = 0;
    
  for(let i = start; i <= end; i++) {
    if(String(i).indexOf('5') === -1) {
      count++;
    }
  }
  return count;
}

// using continue in the if statement
function dontGiveMeFive(start, end){
    var sum=0;
    for (var i = start; i <= end; i++) {
      if (/5/.test(""+i)){continue;};
      sum++;
    };
    return sum;
}