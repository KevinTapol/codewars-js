// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// Parameters: This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//             *Use Comparison and Logical Operators.

// Return: This function should return a number (final grade). There are four types of final grades:
//         100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//         90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//         75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//         0, in other cases

// Examples:(Inputs-->Output):
//           100, 12 --> 100
//           99, 0 --> 100
//           10, 15 --> 100
//           85, 5 --> 90
//           55, 3 --> 75
//           55, 0 --> 0
//           20, 2 --> 0

// Psuedo Code: create a series of if else statements from the return statements where 
//              exam grade input is more than 90 OR number of projects completed is more than 10 return 100
//              exam grade input is more than 75 AND projects completed more than OR equal to 5 return 90
//              exam grade input is more than 50 AND projects completed more than OR equal to 2 return 75
//              else return 0

// my answer easily readable
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10 ){
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

// my answer one liner arrow fn nested ternaries
// I include the parentheses so that it is easier to follow but they are not necessary.
const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : (exam > 75 && projects >= 5 ? 90 : (exam > 50 && projects >= 2 ? 75 : 0))

// best practices 
// something that I often forget is that you can use only if statements instead of else if and else
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
}

// most clever an arrow function with ternaries 
// lol to funny its my answer without parentheses 
const finalGrade = (exam, projects) => {
    return (
        exam > 90 || projects > 10 ? 100 :
        exam > 75 && projects >= 5 ? 90 :
        exam > 50 && projects >= 2 ? 75 : 0
    )
}

// the elusive switch case 
finalGrade = (exam, projects) => {
    switch (true) {
        case (exam > 90 || projects > 10):
        return 100
        break;
        case (exam > 75 && projects >= 5):
        return 90;
        break;
        case (exam > 50 && projects >= 2):
        return 75
        break;
        case (exam <= 55 || projects <= 2):
        return 0;
        break;
        
    }
}

// another switch case without using break
function finalGrade (exam, projects) {
    switch (true) {
        case exam > 90 || projects > 10: return 100;
        case exam > 75 && projects >= 5: return 90;
        case exam > 50 && projects >= 2: return 75;
        default: return 0;
    }
}