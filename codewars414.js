/*
The Office VI - Sabbatical
Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

You need to approach your boss. Her decision will be based on three parameters:

val = your value to the organisation
happiness = her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string s.

Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

Parameters or Edge Cases:
    1st input will be a string of words that can be uppercase, lowercase and/or contain special characters that may exist in the string 'sabbatical'
    2nd input will be an integer representing your value to the organization
    3nd input will be an integer representing happiness level of the boss with you
     

Return:
    return 'Sabbatical! Boom!' if the sum of the 2nd and 3rd values and the count of string chars that occur in the 1st input that also exist in the string 'sabbatical' is greater than 22 else return 'Back to your desk, boy.'

Examples:
    'Can I have a sabbatical?', 5, 5 --> 'Sabbatical! Boom!'
    'Why are you shouting?', 7, 2 --> 'Back to your desk, boy.' 
    'What do you mean I cant learn to code??', 8, 9 --> 'Sabbatical! Boom!' 
    'Please calm down', 9, 1 --> 'Back to your desk, boy.' 

Pseudocode:
    UNKNOWN IF UPPERCASE CHARS 'SABBATICAL' WILL COUNT TOWARDS VALUES OF 'sabbatical' Confirmed after running test cases chars from the 1st input that are uppercase are not counted as included in 'sabbatical'

    declare a variable count and set it equal to the sum of val and happiness
    iterate through the 1st input s and for each char that exists in the string 'sabbatical' add 1 to count
    if count is greater than 22 then return 'Sabbatical! Boom!' else 'Back to your desk, boy.'

*/

// My Answer brute force for loop
function sabb(s, val, happiness){
    let count = val + happiness
    for(let e of s){
        if('sabbatical'.includes(e)){
            count += 1
        }
    }
    if(count > 22){
        return 'Sabbatical! Boom!'
    } else {
        return 'Back to your desk, boy.'
    }

}

// My Answer brute force for loop refactored ternary
function sabb(s, val, happiness){
    let count = val + happiness
    for(let e of s){
        if('sabbatical'.includes(e)){
            count += 1
        }
    }return count > 22 ? 'Sabbatical! Boom!' :'Back to your desk, boy.'
}