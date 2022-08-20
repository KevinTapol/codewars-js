// Parameters or Edge cases: input is a positive integer
// Return:  Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// Examples:  month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Psuedo code:  take the input number and if it is equal to or less than 1-3 return 1st quarter
//               if the input number is 3-6 return 2nd quarter
//               if the input number is 7-9 return 3rd quarter
//               if the input number is 10-12 return 4th quarter
// or I could do the classic nested ternaries inside an arrow fn

// my answer simple and easy to follow
// this turned out to be the 2nd best practices
const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    }else {
        return 4
    }
    
}
// my one liner full codewars brain answer arrow fn nested ternary
// if you use curly brackets {} for the nested statement, it will return undefined for month as a local variable
const quarterOf = (month) => month <= 3 ? 1: (month <= 6 ? 2 :(month <= 9 ? 3 : 4))

// best practices and most clever using Math object and .ceil() method
const quarterOf = m => Math.ceil(m/3);

// the switch case
const quarterOf = (month, quarter = 4) => {
    switch (month) {
        case 1:
        case 2:
        case 3:
            quarter = 1;
        break;
        case 4:
        case 5:
        case 6:
            quarter = 2;
        break;
        case 7:
        case 8:
        case 9:
            quarter = 3;
        break;
    }
    return quarter;
};

// using an object key value pair with a function
const monthToQuarterMap = {
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 2,
    '5': 2,
    '6': 2,
    '7': 3,
    '8': 3,
    '9': 3,
    '10': 4,
    '11': 4,
    '12': 4,
};

function quarterOf(month) {
    return monthToQuarterMap[month];
}