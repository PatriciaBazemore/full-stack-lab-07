
// button labeled Generate Die
//     click creates a new Die obj(div added to screen with random number)

// Dice in grid like dom dom dom

// button labeled Roll Dice
//     cause all dice on screen to roll

// Hints:
// a property on Die obj to hold Div representing the die on the page on the page  
// store each die in a global array to help roll all dice
// Clicking Roll Dice can loop through that array

// Ex: Using the DOM in a Class●Your class is just like any other JavaScript code, so you are free to access the DOM functions (or even JQuery if you import it)

// var Person = function(name, email) {
//     this.name= name;
//     this.email = email;
//     this.div =document.createElement('div');
//     var h1 =document.createElement('h1');    
//     h1.innerHTML =this.name;
//     var h3 =document.createElement('h3');    
//     h3.innerHTML =this.email;
//     this.div.appendChild(h1);
//     this.div.appendChild(h3);
//     this.div.addEventListener('click',this.sayHello.bind(this));document.body.appendChild(this.div);
// };

// Person.prototype.sayHello=function() {
//     console.log('Hello, my name is '+this.name+' and my email is '+this.email +'.');
// };

//var dice = new Die();

var diceArray = [];

function rollDice() {
    // In here, I need to roll all the dice I have added
        //  {
        //     var newNum = diceArray[i]
        //     h1.innerHTML = newNum;

                 for (var i = 0 ; i < diceArray.length; i++) {
                      diceArray[i].roll();
                       //newDie.innerHTMl.roll();
                 } 
};



var generateDieBtn = document.getElementById('generate-die');
generateDieBtn.addEventListener('click', function() {
    var dice = new Die();
    diceArray.push(dice);  //p.sayHello slide p10. for example 
});

var rollDiceBtn = document.getElementById('roll-dice');
rollDiceBtn.addEventListener('click', rollDice);   //'null'+ [])



//represents a single die
// when Die is created it should automatically 
var Die = function( ){
    //create a div
    this.div = document.createElement('div');
    var div = this.div;
    this.div.className = 'dice';
    //put a div on the screen
    this.h1 = document.createElement('h1');
    this.div.appendChild(this.h1);
    document.body.appendChild(this.div);
    this.roll();

};

//function named roll        
Die.prototype.roll = function() {
         //generates random interger 1-6,
        this.value = Math.floor(Math.random() * 6);
        this.h1.innerHTML = this.value;

         //sets value property,  
         //updates div on page with new value
         //roll itself
         
}; 

//Die.prototype.rollAll = function();

