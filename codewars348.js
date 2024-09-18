/*
Who's Online?

Parameters or Edge Cases:
    inputs will be an array of objects of 3 key value pairs 
    username will always be a string, status will always be either 'online' or 'offline' and lastActivity will always be number >= 0 in minutes
    If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
    if there are no users for a specific key pair then omit the key value pair entirely
    if the input array is empty then return an empty object
Return:
    a single object with key value pairs where the keys are online, offline and away. 

Examples:
    [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy', 
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob', 
      status: 'online',
      lastActivity: 104
    }]

    {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }

If for example, no users are online the output should look as follows:
    [{
      username: 'Lucy', 
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob', 
      status: 'online',
      lastActivity: 104
    }]

    {
      offline: ['Lucy'],
      away: ['Bob']
    }


Pseudocode:
    if the input array is empty then return an empty object
    declare an object named result with the keys of online, offline and away with empty arrays for values
    iterate through the object
        if the value for status is offline then add the current username string to the result object key of offline value array as a string
        if the value for status is online and lastActivity value is greater than 10 then add the current username string to the result object key of away value array as a string
        else add the username to the result object key online value array as a string

    return the final object

*/

// My Answer
function whosOnline(arr){
    if(!arr){
        return {}
    }
    let result = {
        online: [],
        offline: [],
        away: []
    }
    for(e of arr){
        // consider making result an empty object then if the key does not exist make it and add the value else add the value to the existing key
        if(e.status === 'offline'){
            result.offline.push(e.username)
        } else if (e.status === 'online' && e.lastActivity > 10){
            result.away.push(e.username)
        } else {
            result.online.push(e.username)
        }
    }
    // if the value is [] then remove the key from result object
    // if(result.online === []){
        
    // }
    return result
}

console.log(whosOnline([ 
  {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Joe', 
    status: 'offline',
    lastActivity: 22
  }
])) // 