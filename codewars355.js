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

// My Answer brute force for loop
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

// My Answer refactored
function getNiceNames(...obj){
    return obj.flat(Infinity).map(e => e['wasNice'] === true ? e['name'] : '').filter(e => e != '')
}
function getNaughtyNames(...obj){
    return obj.flat(Infinity).map(e => e['wasNice'] === false ? e['name'] : '').filter(e => e != '')
}

// My Answer refactored one liner arrow fn
const getNiceNames = (...obj) => obj.flat(Infinity).map(e => e['wasNice'] === true ? e['name'] : '').filter(e => e != '')
const getNaughtyNames = (...obj) => obj.flat(Infinity).map(e => e['wasNice'] === false ? e['name'] : '').filter(e => e != '')

console.log(getNiceNames({name: 'Santa', wasNice: true}, {name: 'Warrior reading this kata', wasNice: true})) // ['Santa', 'Warrior reading this kata']
console.log(getNaughtyNames({name: 'Santa', wasNice: true}, {name: 'Warrior reading this kata', wasNice: true})) // []

// Best Practices and Most Clever Deprecated code that still works on some browsers!!!
function getName(person) {
    return person.name;
  }
  
  function wasNice(person) {
    return person.wasNice;
  }
  
  function wasNaughty(person) {
    return !wasNice(person);
  }
  
  function getNiceNames(people){
    return people.filter(wasNice).map(getName);
  }
  
  function getNaughtyNames(people){
    return people.filter(wasNaughty).map(getName);
  }

// IMO Best Practices and Most Clever
// filter where wasNice is true then map only the name property
function getNiceNames(people){
    return people.filter(p => p.wasNice).map(p => p.name);
}
  
  function getNaughtyNames(people){
     return people.filter(p => !p.wasNice).map(p => p.name);
}

// using .reduce()
function getNiceNames(people){
    return people.reduce(function(arr, curr){
      curr.wasNice && arr.push(curr.name);
      return arr;
    }, []);
}
  
  function getNaughtyNames(people){
      return people.reduce(function(arr, curr){
      !curr.wasNice && arr.push(curr.name);
      return arr;
    }, []);
}

// clean .reduce()
const getNiceNames = people => people.reduce((pre, val) => val.wasNice ? [...pre, val.name] : pre, []);
  
const getNaughtyNames = people => people.reduce((pre, val) => val.wasNice ? pre : [...pre, val.name], []);