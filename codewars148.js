// Parameters or Edge cases: First argument is an array of numbers and the second is the divisor.
// Return:  all numbers which are divisible by the given divisor as an array
// Examples: [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//           (divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
//           (divisibleBy([1,2,3,4,5,6], 3), [3,6]);
//           (divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
//           (divisibleBy([0], 4), [0]);
//           (divisibleBy([1,3,5], 2), []);
// Psuedo code:  Find numbers which are divisible by given number
//               take in the array then use an array method to divide each element in the array by the second input
//               use % to check if there is a remainder
//               if there is no remainder meaning % === 0 then push those elemenents into another array using .map() .filter() Array.from() or any other method that creates a shallow copy of the input array
//               when doing simple math I prefer to use .filter()

// my answer and best practices
function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
}

// my answer arrow function
// strange .map() returned boolean when replacing .filter()
const divisibleBy = (numbers, divisor) => numbers.filter(x => x % divisor === 0)

// for loop
function divisibleBy(numbers, divisor) {
    var newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            newArr.push(numbers[i]);
        } 
    }
    return newArr;
}

// clever using !false
// take the values that return 0 meaning not false as a statement 
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));

// using .map()
function divisibleBy(numbers, divisor){
    let answer = []
    numbers.map(x => {
        if(x % divisor === 0){
            answer.push(x)}
    })
        return answer
}

// using regex
// .join(' ') to create a space per each number .replace(regex) grab each num that has a remainder and replace with emtpy string .match(regex) to grab each num remaining and create an array per each element or return an empty array .map(Number) to return each object element into a number
let divisibleBy = (n, div) => (n.join` `.replace(/\d+/g, i => i % div ? '' : i).match(/\d+/g) || []).map(Number)