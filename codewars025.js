// Parameters or Edge cases:
// Return: boolean t/f object method .isWorthIt()
// Examples: var titanic = new Ship(15, 10) ave crew is 1.5 draft return false
// Psuedo code: create object method compare object properties if > 20 return true else false

//my answer
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
        return this.draft-(this.crew*1.5)>20}
   }


//best pracices
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }
   
   Ship.prototype.isWorthIt = function(){
   return this.draft-(this.crew*1.5) > 20;
   }