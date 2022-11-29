// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Parameters or Edge Cases:
//      input will be a string of integers and can be as large as 1000 digits
// Return:
//      the largest consecutive five digit integer from the intput string interger
// Examples:
//      describe("Basic tests", () => {
//          it("Testing for fixed tests", () => {
//            let number = "7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"
//            assert.strictEqual(solution(number), 99890, 'solution did not return correct value')
//            assert.strictEqual(solution('1234567898765'), 98765, 'Failed when max 5 digits is at end of number')
//            assert.strictEqual(solution("731674765"), 74765, 'Failed in overlapping test')
//          });
//      });
  
// Psuedo Code:
//      find the largest single digit that has four digits following it in the given string
//      declare a global empty array
//      loop through the string pushing all combinations of numbers with 4 trailing indexes ending where the current iteration index is less than the length of the input string -4
//      push every instance of substrings with a length of 5 to the global array
//      iterate through the new array and find the largest 5 digit integer combination


// my answer
function solution(digits){
    // declare a global empty array
    var largestInts = [];
    // loop through the string pushing all combinations of numbers with 4 trailing indexes ending where the current iteration index is less than the length of the input string -4
    for (let i = 0; i < digits.length - 4; i++){
    // push every instance of substrings with a length of 5 to the global array    
        largestInts.push(digits.substr(i,5))
    }
    // iterate through the new array and find the largest 5 digit integer combination
    return Math.max(largestInts.join(""))
}

// my answer refactored arrow function
const solution = (digits) => {var largestInts = []; for(let i = 0; i < digits.length -4; i++){largestInts.push(digits.substr(i,5))}return Math.max(...largestInts)}

// best practices
function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
}

// most clever
function solution(digits){
    return digits.length === 5 ? +digits :
    Math.max(+digits.slice(0,5), solution(digits.slice(1)))
}

// one liner arrow function using spread .reduce() with Math.max()
const solution = digits => [...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));

// using array methods
function solution(digits){
    return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
}

// .match() regex
function solution(digits) {
    for (let i = 10, m; i--;) 
      if (m = digits.match(RegExp(i + '\\d{4}', 'g'))) return Math.max(...m);
}

// using new RegExp .match() and regex
function solution(digits) {
    let numbers = digits.match(new RegExp(/9\d{4}/, "g"))
    return Math.max.apply(0, numbers)
}

// nested for loops
function solution(digits) {
    let max = 0;
    for (let i = 0; i < digits.length; i++) {
      let series = "";
      for (let j = i; j < i + 5; j++) {
        series += digits[j];
      }
      if (series * 1 > max) {
        max = series * 1;
      }
    }
    return max;
}