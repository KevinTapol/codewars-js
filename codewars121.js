// Switch it Up!
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

// Parameters or Edge cases: input will be positive single digit integer 0-9
// Return: a string spelling of the number
// Examples: 1 -> "One"
// Psuedo code: I would rather use if else than switch case but it's what the codewars wants. 
//              take the user input and per each case return the respective string spelling
//              I am going to also create an object key value pair then call it using a function

// my answer following the instructions
function switchItUp(number){
    switch(number) {
        case 0:
            return 'Zero'
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return 'Three'
        case 4:
            return 'Four'
        case 5: 
            return 'Five'
        case 6:
            return 'Six'
        case 7:
            return 'Seven'
        case 8:
            return 'Eight'
        case 9:
            return 'Nine'
    }
}

// my answer not following instructions but using an object
const switchItUp = (number) => {
    const posInt = {0:'Zero', 1:'One', 2:'Two', 3:'Three', 4:'Four', 5:'Five', 6:'Six', 7:'Seven', 8:'Eight', 9:'Nine'}
    return posInt[number]
}

// best practices and most clever
// this is not following the instructions to use a switch case
// this is however a great way to solve the problem using an array and calling the array by input
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

// using a string then .split(' ') to convert to an array with each string per its respective element then [number] for input key returning respective value string
function switchItUp (number) {
    return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
}

// to funny nesting ternaries
const switchItUp = N => N == 1 ? 'One' : N == 2 ? 'Two' : N == 3 ? 'Three' : N == 4 ? 'Four' : N == 5 ? 'Five' : N == 6 ? 'Six' : N == 7 ? 'Seven' : N == 8 ? 'Eight' : N == 9 ? 'Nine' : 'Zero'