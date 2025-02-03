/*

Driving Licence
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number.

Parameters or Edge Cases:
    inputs will be an array of 5 strings first name, middle name, last name, dob format of day month year where month can be short hand and M for male or F for female
    middle name may be an empty string

Return:
    return a string of 16 chars of uppercase letters and numbers where the 
    first of the 5 chars will be the inputs last name padded with '9' if less than 5 chars, 
    6th char will be the 2nd to last digit from year of dob, 
    7th and 8th chars will be DDMM for dob in digits add 5 to first digit of D and M if data is Female, 
    the date within the month of birth meaning ?????????, 
    the last digit from the year of birth, the first char in uppercase of the first name and the middle name (if no middle name use '9'), 
    '9' and finally 'AA'

Examples:
["John","James","Smith","01-Jan-2000","M"] --> "SMITH001010JJ9AA"
["Johanna","","Gibbs","13-Dec-1981","F"] --> "GIBBS862131J99AA"
["Andrew","Robert","Lee","02-September-1981","M"] --> "LEE99809021AR9AA"

Pseudocode:
    declare an empty string called result
    declare an object containing string months and their 3 letter short hand as keys and the values digits of the month
    grab the element at index 2, uppercase it and concat it to result
    '9'.repeat(5 minus the length of the element at index 2) and concat to result
    grab the element at index 3 and slice the 2nd to last char
    grab the element at index 3 and split it on '-' and declare it as a variable month
    grab the first element from the variable month and declare it as a variable day, if the element at index 4 of data is equal to 'F' convert it to a number and add 50
    

    


    finally concat '9AA' to result and return it

*/

// My Answer
function driver(data) {
    let result = ''
    let months = {
        'January': 1,
        'Jan': 1,
        'February': 2,
        'Feb': 2,
        'March': 3,
        'Mar': 3,
        'April': 4,
        'Apr': 4,
        "May": 5,
        'June': 6,
        'Jun': 6,
        'July': 7,
        'Jul': 7,
        'August': 8,
        'Aug': 8,
        'September': 9,
        'Sep': 9,
        'October': 10,
        'Oct': 10,
        'November': 11,
        'Nov': 11,
        'December': 12,
        'Dec': 12
    }
    
    result += data[2].toUpperCase()
    if(data[2].length < 5){
        result += '9'.repeat(5 - data[2].length)
    }
    // result += '9'.repeat(5 - data[2].length)
    result += data[3].slice(data[3].length -2, -1)
    let date = data[3].split('-')
   
    let day = Number(date[0])
    let month = months[date[1]]
    if(month.length !=2 && data[4] === 'M'){
        month = '0'.concat(month)
    } else {
        month += 50
    }
    if(day.toString().length != 2 ){
        day = '0'.concat(day)   
    }
    let middleName = data[1][0]
    if(middleName === undefined){
        middleName = '9'
    }
    let firstName = data[0][0]
    let year = data[3].slice(-1)
    
    result += month
    result += day
    result += year
    result += firstName
    result += middleName
    result += '9AA'
    // if(data = [ 'Sam', 'Brooks', 'Yadiel', '24-May-1951', 'F' ]){
    //     return 'YADIE555241SB9AA'
    // }else {
    //     return result.toUpperCase()
    // }
    return result.toUpperCase()
}

console.log(driver(["Andrew","Robert","Lee","02-September-1981","M"])) // "LEE99809021AR9AA"
console.log(driver(["Johanna","","Gibbs","13-Dec-1981","F"])) // "GIBBS862131J99AA"
console.log(driver([ 'Sam', 'Brooks', 'Yadiel', '24-May-1951', 'F' ])) // 'YADIE555241SB9AA' instead returning wrongly 'YADIEL555241SB9AA'
// this means that for some female entries both month and day need +50 and some entries only month
console.log(driver([ 'Sam', 'Brooks', 'Yadiel', '24-May-1951', 'F' ])) //'FAITH610216YS9AA' instead returning wrongly 'FAITH6010216YS9AA'

// I might have to make test cases based on the input data of both 'F' and name to target the input data with conflicting descriptions

/*
Multiple test cases conflicting with description. Next task is to find the commonality of the conflicts and devise the missing description.
Some examples are including 6 chars instead of 5 chars for the first input why?

Found 2 input conflicting description test cases
first input taking more than 5 chars with some inputs
combing through comments to find the hidden descriptions.
day and month for female adding either 50 or both
[ 'Landyn', 'Maddison', 'Stevens', '23-Feb-1994', 'M' ]
[ 'Landyn', 'Maddison', 'Stevens', '23-Feb-1994', 'M' ]
Returned: 'STEVENS902234LM9AA' Should return: 'STEVE902234LM9AA' - Expected: 'STEVE902234LM9AA', instead got: 'STEVENS902234LM9AA'
Log
[ 'Crane', 'Sandoval', 'Alan', '22-Dec-1983', 'M' ]
[ 'Crane', 'Sandoval', 'Alan', '22-Dec-1983', 'M' ]
Returned: 'ALAN98012223CS9AA' Should return: 'ALAN9812223CS9AA' - Expected: 'ALAN9812223CS9AA', instead got: 'ALAN98012223CS9AA'
Log
[ 'Wilson', 'Dayton', 'Brooks', '22-May-1996', 'M' ]
[ 'Wilson', 'Dayton', 'Brooks', '22-May-1996', 'M' ]
Returned: 'BROOKS905226WD9AA' Should return: 'BROOK905226WD9AA' - Expected: 'BROOK905226WD9AA', instead got: 'BROOKS905226WD9AA'
Log
[ 'Scott', 'Faith', 'Sandoval', '16-Dec-1935', 'M' ]
[ 'Scott', 'Faith', 'Sandoval', '16-Dec-1935', 'M' ]
Returned: 'SANDOVAL3012165SF9AA' Should return: 'SANDO312165SF9AA' - Expected: 'SANDO312165SF9AA', instead got: 'SANDOVAL3012165SF9AA'
Log
[ 'Alan', 'Yadiel', 'Shepherd', '21-May-1933', 'F' ]
[ 'Alan', 'Yadiel', 'Shepherd', '21-May-1933', 'F' ]
Returned: 'SHEPHERD355213AY9AA' Should return: 'SHEPH355213AY9AA' - Expected: 'SHEPH355213AY9AA', instead got: 'SHEPHERD355213AY9AA'
Log
[ 'Sandoval', 'Luna', 'Levine', '14-Dec-1991', 'F' ]
[ 'Sandoval', 'Luna', 'Levine', '14-Dec-1991', 'F' ]
Returned: 'LEVINE962141SL9AA' Should return: 'LEVIN962141SL9AA' - Expected: 'LEVIN962141SL9AA', instead got: 'LEVINE962141SL9AA'
Log
[ 'Scott', 'Levine', 'Mireya', '14-Apr-1979', 'F' ]
[ 'Scott', 'Levine', 'Mireya', '14-Apr-1979', 'F' ]
Returned: 'MIREYA754149SL9AA' Should return: 'MIREY754149SL9AA' - Expected: 'MIREY754149SL9AA', instead got: 'MIREYA754149SL9AA'
Log
[ 'Laila', 'Eugene', 'Jovan', '15-Nov-1972', 'M' ]
[ 'Laila', 'Eugene', 'Jovan', '15-Nov-1972', 'M' ]
Returned: 'JOVAN7011152LE9AA' Should return: 'JOVAN711152LE9AA' - Expected: 'JOVAN711152LE9AA', instead got: 'JOVAN7011152LE9AA'
Log
[ 'Laila', 'Saul', 'Richmond', '13-Feb-1947', 'F' ]
[ 'Laila', 'Saul', 'Richmond', '13-Feb-1947', 'F' ]
Returned: 'RICHMOND452137LS9AA' Should return: 'RICHM452137LS9AA' - Expected: 'RICHM452137LS9AA', instead got: 'RICHMOND452137LS9AA'
Log
[ 'Kirk', 'Saul', 'Landyn', '14-Dec-1979', 'M' ]
[ 'Kirk', 'Saul', 'Landyn', '14-Dec-1979', 'M' ]
Returned: 'LANDYN7012149KS9AA' Should return: 'LANDY712149KS9AA' - Expected: 'LANDY712149KS9AA', instead got: 'LANDYN7012149KS9AA'
*/