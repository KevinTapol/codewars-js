// Parameters or Edge cases:
// Return: string representation of boolean value
// Examples:
// Psuedo code: ternary string true : string false


//my answer
function booleanToString(b){
    return b ? 'true':'false';
}

//best practices
function booleanToString(b){
    return b.toString();
}