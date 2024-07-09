/*
The Office I - Outed

Parameters or Edge Cases:
    inputs will be objects of key value pairs where keys will be names and values will be integers and a string that identifies which of the keys will be the boss in the existing object
    the string passed in as the boss of the object will have double the value but still count as one meaning double the value but divide as 1 person 

Return:
    'Get Out Now!' if the average of the values are less than or equal to 5 else return 'Nice Work Champ!'

Examples:
    {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura' --> 'Get Out Now!'
    {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie' --> 'Nice Work Champ!'
    {'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john' --> 'Get Out Now!'

Pseudocode:
    declare an empty integer sum and set it equal to 0
    create an array named val of all the values of the object and add them to sum
    call the 2nd input string key to get the value and add it to sum
    divide sum by the length of the array of values
    if the result is less than or equal to 5 return 'Get Out Now!' else 'Nice Work Champ!'

*/

// My Answer
// consider higher order fn or a side by side fn to return the object key value pair
// current problem is calling the specific key of boss on the object meet to get the value of boss without using meet.laura because meet.boss returns undefined
function outed(meet, boss){
    let b = Object.entries(meet).filter((e) => e[0] === boss)[0][1]
    // let sum = 0
    // let val = Object.values(meet).reduce((acc, c) => acc + c, 0)
    // sum = (val + meet.boss)/ val.length
    // console.log(sum)
    // if (sum <= 5){
    //     return 'Get Out Now!'
    // } else {
    //     return 'Nice Work Champ!'
    // }
    return b
}
console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')) // 'Get Out Now!'