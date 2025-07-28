//PROTYPICAL BEHAVIOUR OF JAVASCRIPT 
//javascipt does not give up on finding more i.e it gives prototype at each level (from child to parent)


//LITERALY EVERY THING IN JAVASCRIPT CAN BE TREATED AS OBJECT 

function Multiplyby5 (num){
return num*5;
}
Multiplyby5.power = 2;          //as you can see this property is used in object so here this function is acting like an object
  //this signifies that function is also an object with array and string ;
                                
                                
 console.log(Multiplyby5(5));
 console.log(Multiplyby5.power);
 console.log(Multiplyby5.prototype);

 //NOW WE WILL CREATE OUR OWN PROTOTYPE 

function createUser ( username , score ){
this.username = username;
this.score = score;
}

createUser.prototype.increament = function(){
    this.score++;  //jisne bhi bulaya ho uska score baadha doo
    }

   createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
 }
 
 const genius  =  new createUser("vivekanand" , 100);
 const hero = new createUser("naruto" , 25);

 genius.printMe();
 hero.printMe();

 function Information (name){
 this.name = name ;
 }

Information.prototype.truelength = function (){
  this.name = this.name.trim();
  return this.name;
}
const Myname = new Information("   sandeep");
console.log(Myname.truelength());

// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// */