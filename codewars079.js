// Parameters or Edge cases: function name MUST be lovefunc
// Return: true if one input number is odd and the other even else false
// Examples: N/A
// Psuedo code: if num1 is odd and num2 is even return true
//              if num1 is even and num 2 is odd return true
//              else return false


//my answer
function lovefunc(num1,num2){
    if(num1 % 2 == 0 && num2 % 2 != 0){
        return true
    } else if (num1 %2 != 0 && num2 % 2 == 0) {
        return true
    }else {
        return false
    }
}

//best practices and most clever
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

//adding both and mod
function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
}