// Parameters or Edge cases: input point needs to be added to the array for array average
// Return: True if input is greater than array average else false
// Examples:
// Psuedo code: use .push(input) to add the input to the array
//              use .reduce() to add the array
//              divide by the number of elements to get the average
//              compare the input score with the average if greater return true else false

//my answer 
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let sum = classPoints.reduce((acc,c) => acc + c)
    let ave = sum/classPoints.length
    if(yourPoints > ave){
        return true
    }else{
        return false
    }
}

//best practices using truthy also 0 at the end of .reduce() to avoid possible concatenation
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

// interesting using the comparision input as the 0 in the reduce function
const betterThanAverage = (classPoints, yourPoints) =>
    yourPoints > classPoints.reduce((pre, val) => pre + val, yourPoints) / (classPoints.length + 1);

// using spread [...classPoints]
function betterThanAverage(classPoints, yourPoints) {
    const allPoints = [yourPoints, ...classPoints];
    const average = allPoints.reduce((acc,val) => acc + val) / allPoints.length;
    
    return yourPoints > average; 
}

// this is comparing the sums of input score* the number of elements in the array vs the sum of the array without dividing by the lengths
function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length;
}

// using 3 arrow functions 
const betterThanAverage = (classPoints, yourPoints) => yourPoints > average(classPoints);

const average = array => sum(array) / array.length;

const sum = array => array.reduce((a, b) => a + b);