// Parameters or Edge cases: assume that it is a square if its length and width are equal, otherwise it is a rectangle
// Return: area of a square if inputs are equal else perimeter of rectangle
// Examples: 6, 10 --> 32
//           3, 3 --> 9
// Psuedo code: if both inputs are equal return the product of those inputs to get the area of a square
//              else return each input multiplied by 2 then add to get the perimeter of a rectangle
//              I would rather do an if else but will also do a one liner  arrow fn ternary

// my preferred answer
const areaOrPerimeter = function(l , w) {
    if (l===w){
        return l*w
    } else {
        return (2*l) + (2*w)
    }
};
// my arrow fn ternary answer
const areaOrPerimeter = (l, w) => l===w ? l*w : (2*l) + (2*w)


// best practices and most clever is a function with ternary
const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
};

// using underscore and double underscore as variables
// arrow function without const 
areaOrPerimeter = (_,__) =>_==__?_**2:2*(_+__) 

// Math.pow()
// strange they are calling the function in their submit answers
const areaOrPerimeter = function(l , w) {
    // Return your answer
    if(l === w) {
      // Its a sqaure
        return (Math.pow(l,2));
    }else {
        return ((2*l) + (2*w));
    }
};
areaOrPerimeter(4 , 4);