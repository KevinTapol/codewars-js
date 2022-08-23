// Parameters or Edge cases: inputs will be positive integers
// Return: return the 3rd angle in degrees of a triangle
// Examples: NA
// Psuedo code:  a + b + c = 180° formula not given but found
//               solve for unkown angle by taking 180 - a - b where a and b are given inputs
//               return c

// my answer also best practice
// there weren't any solutions that stand out since the problem was so straight forward
function otherAngle(a, b) {
    return 180 - (a + b)
}

// most clever
// this is checking inputs
function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
        return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
        return 0;
    return 180 - a - b; //return missing angle
}
