/*
Coding Meetup #14 - Higher-Order Functions Series - Order the food

Parameters or Edge Cases:
    inputs will be an array of objects will always be valid and formatted as in the example of either 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'
    returned object order of the meals count in the object does not matter
    count value should be a valid number

Return:
    return an object that includes the count of food options selected by the developers

Examples:
    [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
        meal: 'vegetarian' },
      { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
        meal: 'standard' },
      { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
        meal: 'vegan' },
      { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
        meal: 'vegetarian' },
    ] 
        -->
    { vegetarian: 2, standard: 1, vegan: 1 }

Pseudocode:
    create an array copy of the input array with each object containing only the meal value
    declare an empty object
    iterate through the array copy and if the current meal key exist then add 1 to the value
    else create the new key value pair and set the value equal to 1
    return the new obj

    using .reduce()
    use .reduce() to create an empty object to iterate through the input array of objects.
    If the value of meal from the current object does not exist then create a new key with that value and give the new key the value of 1
    else if the key already exists, then add 1 to the value.
    return the new object
*/

// My Answer
const arr1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ]

// My brute force for loop answer
function orderFood(arr) {
    let result = arr.map(e => e = e['meal'])
    let obj = {}
    for(e of result){
        if(!obj[e]){
            obj[e] = 1
        } else {
            obj[e]+=1
        }
    }
    return obj
}

// My answer using .reduce()
function orderFood(arr) {

    const mealCount = arr.reduce((accObj, cObj) => {
        accObj[cObj['meal']] ? accObj[cObj['meal']]++ : accObj[cObj['meal']] = 1
        return accObj
      }, {})
      return mealCount
}

console.log(orderFood(arr1)) // { vegetarian: 2, standard: 1, vegan: 1 }

// Best Practices 
// Cleaner version of my brute force for loop
function orderFood(list) {
    var orders = {};
    list.forEach(d=>{
      if(orders[d.meal]) orders[d.meal]++;
      else orders[d.meal] = 1;
    });
    return orders;
}

// Most Clever
// Cleaner version of my .reduce()
// The reason you can use v.meal here is because the key meal is static but the value is dynamic to include either 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
// If the iterable value is equal to the current value or 0 then add 1 and return the iterable obj.
const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;

// using dynamic i['meal'] instead of i.meal
const orderFood = list => list.reduce( (a, i)=> ( a[i['meal']] = a[i['meal']] + 1 || 1, a), {})

// Same as most clever but not using an arrow fn. Note the ,acc above vs return acc below
function orderFood(list) {
    return list.reduce((acc, x) => {
      acc[x.meal] = (acc[x.meal] || 0) + 1
      return acc
    }, {})
}

// .forEach using the same internal .reduce() logic from Most Clever instead of brute force for loop
function orderFood(list) {
    var res = {};
    
    list.forEach(function (item) {
      res[item.meal] = res.hasOwnProperty(item.meal) ? res[item.meal] + 1 : 1;
    });
    
    return res;
}

// Classic step by step brute force for loop
function orderFood(list) {
    let foodOrder = {}
    
    for (let i = 0; i <list.length; i++){
      if (foodOrder[list[i].meal]){
        foodOrder[list[i].meal]++ 
      } else {
        foodOrder[list[i].meal] = 1
        }
    }
    return foodOrder
}

