/*
Minimum Steps (Array Series #6
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .

Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .

Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .

Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .

Expected Time Complexity O(n Log n)

Parameters or Edge Cases:
    1st input will be an array of integers and the 2nd input will be an integer

Return:
    return an integer representing the index of the element from the 1st input that lead to the sum of elements being greater than or equal to the 2nd input integer

Examples:
    [4,6,3], 7 --> 1
    [10,9,9,8], 17 --> 1
    [8,9,10,4,2], 23 --> 3
    [19,98,69,28,75,45,17,98,67], 464 --> 8
    [4,6,3], 2 --> 0

Pseudocode:
    sort the input array from lowest to highest
    iterate through the array adding the elements together until the sum is greater than or equal to the 2nd input at which we then return the index of the element that resulted in the sum being greater than or equal to the 2nd input
*/

// My Answer
function minimumSteps(numbers, value){
    const sortArr = numbers.sort((a, b) => a - b)
    let sum = 0
    let result
    for(let i = 0; i <= sortArr.length; i++){
        if(sum < value){
            sum += sortArr[i]
        } else {
            result = i
        }
    }return result
}