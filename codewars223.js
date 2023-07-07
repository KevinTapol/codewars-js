// Two fighters, one winner.
/*
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/ 

// Parameters or Edge Cases:
/*
  The class constructor Fighter will be internally supplied meaning there is no need to submit it with your answer but to test for it locally I will copy it over.
  There will be 3 inputs the first two will be objects with properties of string name, integer health, and integer attack_power. The final input will be a string representing which object goes first.
  Inputs will never be empty or null.
*/ 

// Return:
/*
  the string name of the object who won the fight
*/ 

// Examples
/*
  new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew" => "Lew"
  new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry" => "Harry"
  new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry" => "Harald"
  new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald" => "Harald"
  new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry" => "Harald"
  new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald" => "Harald"
*/ 

// Pseudocode:
/*
  // while both fighters health are greater than 0 subtract each objects health by the other objects damagePerAttack
  // if both objects reached 0 at the same exchange rate of subtracting damagePerAttack from health then return the name of the first object that attacked
  // if fighter1's health is less than or equal to 0 then return fighter2's name
  // if fighter2's health is less than or equal to 0 then return fighter1's name
*/ 

// class constructor being called
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}
// my answer
function declareWinner(fighter1, fighter2, firstAttacker) {
  // while both fighters health are greater than 0 subtract each objects health by the other objects damagePerAttack
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  // if both objects reached 0 at the same exchange rate of subtracting damagePerAttack from health then return the name of the first object that attacked
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  // if fighter1's health is less than or equal to 0 then return fighter2's name
  else if (fighter1.health <= 0)
    return fighter2.name;
  // if fighter2's health is less than or equal to 0 then return fighter1's name
  else
    return fighter1.name;
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")) // "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")) // "Harald"

// best practices and most clever
// here they declared variables rounding up the rate of decay of the fighter's health with the other fighter's damagePerAttack
// then they compared the decay and whoever's decay is less then return the other fighter's name
// if the variables are equal then return the first fighter to attack input name of firstAttacker
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

// recursion based on conditionals
function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
  if (fighter1.health <= 0) return fighter2.name
  if (fighter2.health <= 0) return fighter1.name

  return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}

/* Object.defineProperty is a bit more complex than just assigning values to target object. The second argument is a map of property names to property descriptors, which allow you to customize how the property is accessed. The descriptor for attack in my code says that the value of attack is a function. Note, in contrast, that isDead has get rather than value in its descriptor, means that its value is calculated by the function provided. An equivalent way to define attack would to just set its value on the prototype, like so Fighter.prototype.attack = function(other) { other.health -= this.damagePerAttack; };
*/
Object.defineProperties(Fighter.prototype, {
  isDead: {get: function() { return this.health <= 0; } },
  attack: {value: function(other) { other.health -= this.damagePerAttack; } }
});

function declareWinner(fighter1, fighter2, firstAttacker) {
  var [a,b] = (fighter1.name === firstAttacker) ? [fighter1, fighter2] : [fighter2, fighter1];
  while(true)
  {
    a.attack(b);
    if (b.isDead) return a.name;
    b.attack(a);
    if (a.isDead) return b.name;
  }
}

// here they declared a variable based on a ternary return to identify the name of the first attacker
// they also used functions to call on the logic of each step and to check for win case scenarios
function declareWinner(fighter1, fighter2, firstAttacker) {
  var attacker = (fighter1.name === firstAttacker)
    ? fighter1
    : fighter2;
  
  function noOneWins(){
    return ((fighter1.health > 0) && (fighter2.health > 0));
  }
  
  function getNextAttacker(attacker){
    return (attacker === fighter1) ? fighter2 : fighter1;
  }
  
  function getDefender(attacker){
    return getNextAttacker(attacker);
  }
  
  function killRound(attacker){
    var defender = getDefender(attacker);
    defender.health -= attacker.damagePerAttack;
  }
  
  function getWinner(){
    return (fighter1.health > 0) 
      ? fighter1.name 
      : fighter2.name;
  }
  
  while(noOneWins()) {
    killRound(attacker);
    attacker=getNextAttacker(attacker);
  }
  
  return getWinner();
}