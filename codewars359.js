/*
Likes Vs Dislikes

Parameters or Edge Cases:
    inputs will be an array of elements of 3 possible states representing buttons Like Dislike, or Nothing 
    input arrays can be empty

Return:
    return the final state of the button else if the array is empty return the button state Nothing

Examples:
    [Dislike,Dislike] --> Nothing 
    [Like,Like,Like] --> Like 
    [Like,Dislike] --> Dislike 
    [Dislike,Like,Dislike] --> Dislike 
    [Like,Like,Dislike,Like,Like,Like,Like,Dislike] --> Dislike 
    [] --> Nothing 

Pseudocode:
    declare a variable result and set it equal to 0
    iterate through the input array going 1 comparison short because we are comparing next value meaning stop at input array length - 1
        if the current state is Like set result equal to 1
            if the next state is equal to Like set result equal to 0
            if the next state is equal to Dislike set the result equal to -1
        if the current state is Dislike set the result equal to -1
            if the next state is equal to Dislike set the result equal to 0
            if the next state is equal to Like set the result equal to 1
    if the result is 1 return Like, -1 Dislike and 0 Nothing
*/

// My Answer
/*
    consider declare a variable of first element of the index 0 then call object as iterating through
    create an array copy making "Like" 1 and "Dislike" -1 
    if the current e is equal to next index e value  set num = 0 else set current e equal to next e
    local variable in a for loop set to current element comparison
    if at final index set global var result = to local variable current element
    
    array iteration
        if the current state is equal to the next state set the comparison current state to empty and add 1 to i to skip the set the next element as the new state
        if comparing an empty to next set the current state to next value and continue
        if the current state and the next state differs  and the current state is not empty then set the next state to current state and continue 
*/ 

// My Answer 
function likeOrDislike(arr) {
    if(!arr){
        return "Nothing"
    }if(arr.length === 1){
        return arr[0]
    }
    let result = arr[0]
    
    for(let i = 1; i < arr.length; i++){
        if(result === arr[i]){
            result = "Nothing"
        }else if(result !== arr[i]) {
            result = arr[i]
        }
    }return result === undefined ? "Nothing" : result

}

console.log(likeOrDislike(["Dislike","Dislike"])) // "Nothing"
console.log(likeOrDislike(["Dislike","Dislike","Like"])) // "Like"
console.log(likeOrDislike([ 'Dislike' ])) // "DisLike"
console.log(likeOrDislike(["Like","Like","Dislike","Like","Like","Like","Like","Dislike"])) // "Dislike"

// Best Practices
function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
}

// Most Clever
// using .reduce() but the accumulative variable
function likeOrDislike(buttons) {
    return buttons.reduce( (state,button) => button===state ? Nothing : button , Nothing );
}

// .forEach() switch case
function likeOrDislike(buttons) {
    let state = 'Nothing'
    buttons.forEach((button) => {
      switch(button){
        case 'Like': return state !== 'Like' ? state = 'Like' : state = 'Nothing'
        case 'Dislike': return state !== 'Dislike' ? state = 'Dislike' : state = 'Nothing'
        default: return state
      }
    })
    return state
}

// switch case using .map() instead of .forEach()
function likeOrDislike(buttons) {
    if(!buttons.length) return 'Nothing';
    
    let state = 'Nothing';
    
    buttons.map(button => {
      switch(button) {
          case 'Dislike':
            state = state == 'Dislike' ? 'Nothing' : 'Dislike';
          break;
          case 'Like':
            state = state == 'Like' ? 'Nothing' : 'Like';
          break;
      }
    });
    
    return state;
}