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
    declare an empty object to push to
    iterate through the object
        if the value for status is offline then add the current username string to the result object key of offline value array as a string 
          if the current value does not exist then create the key as the status and add the username as a string to an empty array
        if the value for status is online and lastActivity value is greater than 10 then add the current username string to the result object key of away value array as a string 
          if the current value does not exist then create the key as the status and add the username as a string to an empty array
        else add the username to the result object key online value array as a string
          if the current value does not exist then create the key as the status and add the username as a string to an empty array

    return the final object

*/

// My Answer
function whosOnline(arr){
    let result = {}
    if(!arr){
        return result
    }
    for(e of arr){
        if(e.status === 'offline'){
          !result.offline ? result.offline = [e.username] : result.offline.push(e.username)
        } else if (e.status === 'online' && e.lastActivity > 10){
          !result.away ? result.away = [e.username] : result.away.push(e.username)
        } else {
            !result.online ? result.online = [e.username] : result.online.push(e.username)
        }
    }
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


// Best Practices
// similar to my answer but refactored currentElement.status instead of separate if, else if and else statements
const whosOnline = (friends) => {
  let output = {};
  friends.forEach(e => {
      let status = e.status;
      if(status === 'online' && e.lastActivity > 10) status = 'away';
      let temp = output[status];
      if(output[status]) {
          output[status].push(e.username);
      }
      else {
          output[status] = [e.username];
      }
  });
  return output;
}

// Most Clever using .reduce()
const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
  const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
  a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
  return a;
}, {})

// using .forEach instead of for loop 
const whosOnline = (friends) => {
  const output = {}
  friends.forEach((n) => {
      if (n.status === 'online' && n.lastActivity <= 10) {
          if (!output.online) output.online = [];
          output.online.push(n.username)
      } else if (n.status === 'offline') {
          if(!output.offline) output.offline = [];
          output.offline.push(n.username)
      } else {
          if(!output.away) output.away = [];
          output.away.push(n.username)
      }
  })
  return output;
}

// creating a nested array for conditionals, then using .map() to consolidate and finally using .reduce() to create an empty object to push to
const whosOnline = friends =>
  [['online',  friend => friend.status === 'online' && friend.lastActivity <= 10],
   ['away',    friend => friend.status === 'online' && friend.lastActivity >  10],
   ['offline', friend => friend.status === 'offline']]
  .map(([status, func]) => [status, friends.filter(func).map(friend => friend.username)])
  .reduce((result, [status, array]) => {
      if (array.length) result[status] = array;
      return result;
}, {});

// creating a function getStatus to make .reduce() dry code 
const whosOnline = (friends) => {

  let status;  

  const getStatus = friend => 
    friend.status === 'online' && friend.lastActivity > 10 
    ? 'away' 
    : friend.status;

  return friends.reduce((state, friend) => (
    status = getStatus(friend),
    state[status] = state[status] || [],
    state[status].push(friend.username),
    state
  ), {});

}

// declaring empty arrays for the object then for loop conditional logic
const whosOnline = (friends) => {
  let online = []
  let away = []
  let offline = []
  let result = {}
  for(let i in friends){
      if(friends[i].status == 'online' && friends[i].lastActivity <= 10){            
          online.push(friends[i].username)
          result.online = online
      }
      else if(friends[i].status == 'offline'){
          offline.push(friends[i].username)
          result.offline = offline
      }
      else{            
          away.push(friends[i].username)
          result.away = away
    }
  }
  
  return result
}