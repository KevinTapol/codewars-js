/*
Find Your Villain Name

Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

The first name will come from the month, and the last name will come from the last digit of the date:

Month -> first name

January -> "The Evil"
February -> "The Vile"
March -> "The Cruel"
April -> "The Trashy"
May -> "The Despicable"
June -> "The Embarrassing"
July -> "The Disreputable"
August -> "The Atrocious"
September -> "The Twirling"
October -> "The Orange"
November -> "The Terrifying"
December -> "The Awkward"
Last digit of date -> last name

0 -> "Mustache"
1 -> "Pickle"
2 -> "Hood Ornament"
3 -> "Raisin"
4 -> "Recycling Bin"
5 -> "Potato"
6 -> "Tomato"
7 -> "House Cat"
8 -> "Teaspoon"
9 -> "Laundry Basket"
The returned value should be a string in the form of "First Name Last Name".

For example, a birthday of November 18 would return "The Terrifying Teaspoon"

Parameters or Edge Cases:
    inputs will be a single string with a month (first letter in uppercase) white space and an integer representing a day of the month

Return:
    return the respective index month and the last digit of the day of the input index location as a string with 'The' first, month 2nd and finally day

Examples:
new Date("May 3") --> "The Despicable Raisin"
new Date("April 21") --> "The Trashy Pickle"
new Date("December 17") --> "The Awkward House Cat"

Pseudocode:
    declare a string answer and set it equal to 'The '
    create an array months and list each month to match the const array m
    split the string into an array and grab the first word which is the month
    find the indexOf the month in the months array and concat the element to answer
    grab the last char from the input and convert it to a number and grab the element from const d at the index of that number
    concat a whitespace and then the element to answer
    return answer

*/

// My Answer using with string input and date object commented out
// The input is a date object like 2001-05-03T00:00:00.000Z requiring .getMonth() and .getDate() methods
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    // methods for date object
    // const month = birthday.getMonth()
    // const day = Number(birthday.getDate().toString().slice(-1))

    // methods if the input was a string
    const month = birthday.slice(0, birthday.indexOf(' '))
    const day = Number(birthday[birthday.length -1])
    const marr = months.indexOf(month)
    
    let answer = "The "
    
    // if input is string concat
    answer += m[marr] + ' '
    // if the input is a date object
    // answer += m[month] + ' '
    answer += d[day]

    return answer
}

// My Answer if the input is a string
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const month = birthday.slice(0, birthday.indexOf(' '))
    const day = Number(birthday[birthday.length -1])
    const marr = months.indexOf(month)
    
    return "The ".concat(m[marr] + ' ').concat(d[day])
}

// My Answer using date object methods
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    const month = birthday.getMonth()
    const day = Number(birthday.getDate().toString().slice(-1))

    let answer = "The "
    
    answer += m[month] + ' '
    answer += d[day]

    return answer
}

// My Answer using date object methods refactored
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    return "The ".concat(m[birthday.getMonth()] + ' ').concat(d[Number(birthday.getDate().toString().slice(-1))])
}

console.log(getVillainName("May 3")) // "The Despicable Raisin"