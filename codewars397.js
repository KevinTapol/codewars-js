/*
Product of Largest Pair

Parameters or Edge Cases:
    inputs will be an array of positive numbers and will always be valid

Return:
    return the product of the two highest values of the input array in PERFORMANT method

Examples:
    [56, 335, 195, 443, 6, 494, 252] --> 218842
    [154, 428, 455, 346] --> 194740
    [39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411] --> 187827
    [136, 376, 10, 146, 105, 63, 234] --> 87984
    [354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89] --> 218536
    [346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14] --> 192672
    [134, 320, 266, 299] --> 95680
    [114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252] --> 139496
    [375, 56, 337, 466, 203] --> 174750

Pseudocode:
    sort the input array in descending order and return the product of the first two elements TOO SLOW
    declare two variables x and y representing the max variables and set them equal to 0 since all elements will be positive
    iterate through the array
        if the current element is greater than x then set y equal to x and set x equal to the current element assigning the highest value to x and the 2nd highest value to y
        else if the current element is greater than y then set y equal to the current element assigning the 2nd highest value to y
    outside of the iteration return the product of x and y

*/

// My Answer too slow
function maxProduct(arr) {
    arr.sort((a, b) => b - a)
    return arr[0]*arr[1]
}

// My Answer brute force for loop
function maxProduct(arr) {
    let x = 0
    let y = 0

    for (let e of arr) {
        if (e > x) {
            y = x
            x = e
        } else if (e > y) {
            y = e
        }
    }return x * y
}


console.log(maxProduct([56, 335, 195, 443, 6, 494, 252])) // 218842

// Best Practices and Most Clever
// using Math.max.apply(Math, a) to grab highest value from the input array then remove it using .splice() then again to grab the next highest value
function maxProduct(a) {
    var biggest = Math.max.apply(Math, a);
    a.splice(a.indexOf(biggest), 1);
    return biggest * Math.max.apply(Math, a);
}

// one liner of best practices
function maxProduct(a) {
    return a.splice(a.indexOf(Math.max.apply(Math,a)),1) * Math.max.apply(Math,a);
}

// Math.max() instead of Math.max.apply()
function maxProduct(a) {
    let largestVal = a.splice((a.indexOf(Math.max(...a))),1)
    let secondVal = a.splice((a.indexOf(Math.max(...a))),1)
    return largestVal*secondVal
}

// clever use of a for loop assigning the first value as declared variables instead of 0
function maxProduct(a) {    
    var max = a[0];
    var preMax = a[0];
    for(var i=1;i<a.length;i++){
      if(a[i] > max){
        preMax = max;
        max = a[i];
      } else {
        if(a[i] > preMax){
          preMax = a[i];
        }
      }
    }
  
    return max * preMax;
}

// Using .reduce()
function maxProduct(a) {
    const max = Math.max(...a);
    return max*a.reduce((x,c) => c!==max&&c>x?c:x,0);
}

// using .forEach() for iteration
function maxProduct(a) {
    let max = Math.max(...a)
    let ans = 0
    
    a.forEach(n => {
      if(n !== max) {
        if(ans < n * max) ans = n * max
      }
    })
    
    return ans
}