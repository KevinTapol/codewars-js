// Parameters or Edge cases:
// Return: 'Hello boss' if input is owner else 'Hello guest'
// Examples:
// Psuedo code:  if input name equals owner return 'Hello boss'
//               else return 'Hello guest'
//               I will make a one-liner arrow fn ternary using truthy but comment it out because it isn't as easy to follow as if else is

// my answer
function greet (name, owner) {
    if(name === owner){
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}
// my arrow fn ternary
// const greet = (name,owner) => name === owner ? 'Hello boss' : 'Hello guest'

// lol best practices ended up being ternary truthy without arrow fn
function greet (name, owner) {
    return name === owner ? 'Hello boss' :  'Hello guest';
}

// most clever is using template literals with a ternary inside
function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
}