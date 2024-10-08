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
function likeOrDislike(arr) {
    if(!arr){
        return []
    }
    if(arr.length === 1){
        return arr[i]
    }

    let newArr = arr.map(e => e === "Like" ? 1 : -1)
    let result = newArr[0]
    let num = 0
    
    // 3 conditions 1 vs -1, same vs same or -1 vs 1
    for(let i = 1; i < newArr.length; i++){
        if(result === newArr[i]){

            result = newArr[i + 1] || 0
            i++
        }

    }

    if(result === 1){
        return "Like"
    } else if (result === -1){
        return "Dislike"
    } else {
        "Nothing"
    }
}

console.log(likeOrDislike(["Dislike","Dislike"])) // "Nothing"
// console.log(likeOrDislike([ 'Dislike' ])) // "DisLike"
// console.log(likeOrDislike(["Like","Like","Dislike","Like","Like","Like","Like","Dislike"])) // "Nothing"