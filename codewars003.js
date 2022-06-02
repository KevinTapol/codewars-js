//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//Paramenters Edge cases setting initial run to 0
//Return bolean compare sums of squares of array a > sum of cubes array b
//Examples c**2 is squared but can alsow use Math.pow(c,2) same with c**3 Math.pow(c,3)
//Psuedo code when you see sum use method .reduce() which takes in 2 parameters accumulator and current value then returns a singular value. In this case, we want to add to the accumulation and set the initial value to 0 which helps for type conversion to be a number. This makes the very first time the function runs to return accumulation value as 0

function compareSquareAndCube(a,b){
    return a.reduce((acc,c) => acc + c**2, 0) > b.reduce((acc,c)=> acc + c**3, 0)
}
console.log(compareSquareAndCube([2,2,2],[2,2,2]))
//this returns false squares of array a are less than cubes of array b
console.log(compareSquareAndCube([4,4,5],[2,2,2]))
//this returns true squares of array a are greater than array b cubed