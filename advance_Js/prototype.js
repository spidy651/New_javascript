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