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
    return a string of 16 chars of uppercase letters and numbers where the first of the five chars will be the inputs last name padded with '9' if less than 5 chars, the 2nd to last digit from year of dob, DDMM for dob in digits add 5 to first digit of D and M if data is Female, the date within the month of birth meaning ?????????, the last digit from the year of birth, the first char in uppercase of the first name and the middle name (if no middle name use '9'), '9' and finally 'AA'

Examples:
["John","James","Smith","01-Jan-2000","M"] --> "SMITH001010JJ9AA"
["Johanna","","Gibbs","13-Dec-1981","F"] --> "GIBBS862131J99AA"
["Andrew","Robert","Lee","02-September-1981","M"] --> "LEE99809021AR9AA"

Pseudocode:
    declare an empty string called result
    grab the element at index 2, uppercase it and concat it to result
    '9'.repeat(5 minus the length of the element at index 2) and concat to result
    


    finally concat '9AA' to result and return it

*/

// My Answer
function driver(data) {
    // Code here
}