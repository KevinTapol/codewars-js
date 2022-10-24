// Parameters or Edge Cases:
//       aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// Return:
//        return n the number of entire years needed to get to p a population greater or equal
// Examples:
//        describe("nbYear",function() {
//            it("Basic tests",function() {    
//                Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//                Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//                Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
//        })})
// Psuedo Code: 
//         take in 4 inputs 
//              first input is the starting population of an area
//              second input is percent of expected growth of the population and need to multiply by 0.01 to convert to percentages
//              third input is expected inhabitants coming or going
//              fourth input is the goal population to reach (can be over but not under)

//         take the first input add it to the product of the first input and the percent converted second input
//         then add third input and save that sum to new sum 
//         compare that new sum to the fourth input
//         if the new sum is less than the fourth input repeat the process but with the first input now equal to the sum
//         if the new sum is equal or greater than the fourth input then return the for loop iteration which equates to years for this codewars

// my answer
// I declared the for loop iteration outside of the for loop so that I could return the current iteration outside the for loop. I could have use var inside the for loop to achieve the same thing of declaring globally.
// Also I used Math.floor() here to round down because I need to convert the potential non-integer back into an interger. Rounding down is necessary because I need to get equal to or above the input p. I could have used parseInt() instead of Math.floor() to achieve the same thing.
// 
function nbYear(p0, percent, aug, p) {
    let i
    for(i = 0; p0 < p; i++) {
        p0 = Math.floor(p0 + p0 * percent * 0.01 + aug)
    } return i
}

// my answer one liner arrow function
const nbYear = (p0, percent, aug, p) => { for(var i = 0; p0 < p; i++) { p0 = Math.floor(p0 + p0 * percent * 0.01 + aug) } return i }


// best practices and most clever
// they used var to declare inside the for loop iteration globally
// similar to mine except dividing by 100 instead of multiplying by 0.01
function nbYear(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }

// interesting
// they used an arrow function with a ternary and declared a variable inside the parameters idicating the current loop interation instead of using var for a global return
// they used the condition of the projected population value divided by the initial population value to see if it is greater than 1.
// If the initial population value is smaller than the projected population value, call the function again but with the new inputs after the for loop else return the current iteration.
// f(a+~~(a*b/1e2)+c,b,c,d,++r) is acting as the for loop
nbYear=f=(a,b,c,d,r=0)=>d/a>1?f(a+~~(a*b/1e2)+c,b,c,d,++r):r

// wow a recursive
//Recursive function: exit condition p0 >= p
function nbYear(p0, percent, aug, p) {
    p0 =  Math.floor(p0*(1+percent/100)+aug)
    if (p0>=p)
       return 1
    return nbYear(p0,percent,aug,p)+1
}

// while loop
function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
      p0 = Math.floor((1 + percent / 100) * p0 + aug);
      count++
    } 
    return count;
}

// they are putting the for loop in the if return
function nbYear(p0, percent, aug, p, years = 0) {
    if (p0 < p) {
      return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
    }
    return years;
}

// using parseInt() instead of Math.floor()
function nbYear(p0, percent, aug, p, i = 1) {
    const per = percent / 100;
    const pp = parseInt(p0 + p0 * per + aug);
    if (pp >= p)
        return i;
    return nbYear(pp, percent, aug, p, i+1);
}

// interesting declaring the for loop variable outside of the for loop
function nbYear(p0, percent, aug, p) {
    let n
    for (n = 1; p0 < p; n++) {
      p0 += parseInt(p0 * (percent / 100))
      p0 += aug
    }
    return n-1
}

// using the increment part of the for loop as the calculations
function nbYear(p0, percent, aug, p) {
    let count = 0;
    for (let i = p0; i < p; i = Math.floor(i + (i * percent / 100) + aug)) {
     count++;
   }
   return count;
}