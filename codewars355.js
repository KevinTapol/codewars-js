/*
Naughty or Nice?

Parameters or Edge Cases:
    inputs can be arrays, nested arrays or objects
    there can be more than 1 input 
    objects represent people key name with values of strings representing names and key wasNice with values of boolean true or false
    
Return:
    return 2 different functions where getNiceNames returns an array of the object values of name as an array of string elements where wasNice has boolean true and getNaughtyNames where wasNice has boolean false

Examples:
  {name: 'Santa', wasNice: true},
  {name: 'Warrior reading this kata', wasNice: true}

  getNiceNames() ['Santa', 'Warrior reading this kata']
  getNaughtyNames() []

Pseudocode:
    create an array of all the input objects and flatten the array forcing all inputs whether objects or arrays to be a 1 dimensional array
    iterate through the array grabbing all elements with the key value wasNice: true (for getNice Names) :false (for getNaughtyNames) and push their key value names: string to the array result
    return the array result
*/

// My Answer
function getNiceNames(...obj){
    let flatArr = obj.flat(Infinity)
    let result = []
    for(let e of flatArr){
        if(e['wasNice'] === true){
            result.push(e['name'])
        }
    }
    return result
} 

  
  function getNaughtyNames(...obj){
    let flatArr = obj.flat(Infinity)
    let result = []
    for(let e of flatArr){
        if(e['wasNice'] === false){
            result.push(e['name'])
        }
    }
    return result
}

console.log(getNiceNames({name: 'Santa', wasNice: true}, {name: 'Warrior reading this kata', wasNice: true})) //