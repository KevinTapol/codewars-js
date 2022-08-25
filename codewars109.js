// Parameters or Edge cases: Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
// Return: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Examples: 
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	    'B'
// 70 <= score < 80	    'C'
// 60 <= score < 70	    'D'
// 0 <= score < 60	    'F'
// Psuedo code:  add three inputs and divide by 3
//               use if statements for average and return respective grade or nested ternaries

// my answer
function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3)/3
    if(average >= 90){
        return "A"
    } else if (average >= 80) {
        return "B"
    } else if (average >= 70) {
        return "C"
    } else if (average >= 60) {
        return "D"
    }else {
        return "F"
    }
}

// best practices
// I did not know you could do if statements without curly brackets
function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
        else if (avg < 70) return "D";
        else if (avg < 80) return "C";
        else if (avg < 90) return "B";
        else return "A";
}

// most clever
// exact same thing as if statements just nested ternaries 
function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

// Genius work around IMO 
// Whats happening here is they are getting the sum then dividing by 10 to a single digit. Then based on the response returning its respective location of a string using .charAt() method
var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

// the elusive switch case
function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3)/3;
    switch(true) {
        case (avg >= 90):
            return 'A';
        case ( avg >= 80):
            return 'B';
        case ( avg >= 70):
            return 'C';
        case ( avg >= 60):
            return 'D'; 
        default:
            return 'F';   
    }
}

// creating an object using the key value and calling functions
const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
const sum    = (sum, item)  => sum + item;
const mean   = (...numbers) => numbers.reduce(sum, 0) / numbers.length;

function getGrade () {
    const score = mean(...arguments);

    for (key in grades) {
    if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
    if (score >= grades[key]) return key; 
    }
}

// 2D array with .find() 
function getGrade (s1, s2, s3) {
    const avg = (s1+s2+s3)/3;
    return [
        [90, 'A'],
        [80, 'B'],
        [70, 'C'],
        [60, 'D'],
        [00, 'F']
    ].find(grades => {
        return grades[0] <= avg
    })[1]
}

// using Math.floor() to round down to single integer after dividing
function getGrade (s1, s2, s3) {
    return ['F','F','F','F','F','F','D','C','B','A','A'][Math.floor((s1+s2+s3)/30)];
}

// iterating through all the inputs with spread ...grades 
// then .reduce() to add them and divide by the number of inputs using grades.length
// and finally using object notation to return the value of the key instead of the key of the value
const getGrade = (...grades) => {
    let mean = grades.reduce((s, v) => s + v) / grades.length;
    return {100: 'A', 90: 'A', 80: 'B', 70: 'C', 60: 'D'}[~~(mean / 10) * 10] || 'F';
}