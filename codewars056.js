// Parameters or Edge cases:
// Return: a string object using a class constructor
// Examples:  'johns age is 34'
// Psuedo code: create a class with a constructor with 2 properties (name, age) and a method get info with a template literal combining them

//my answer also best practices
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    get info() {
        return `${this.name}s age is ${this.age}`
    }    
}

//interesting 1 property line instead of using a method
class Person {
    constructor(name, age) {
      this.info = `${name}s age is ${age}`;
    }
  }

//reminds me of getters and setters
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    get info() {
      return this.getInfo();
    }
  
    getInfo() {
      return `${this.name}s age is ${this.age}`;
    }
  }
  

