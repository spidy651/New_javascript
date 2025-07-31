class User {

constructor (username){
this.username = username;
}

logMe(){
    console.log(`Username is ${this.username}`);
}

}
class teacher extends User {
    constructor(username , email , password){
super(username);
this.email = email;
this.password = password ; 
 }
addCourse(){
console.log(`a new course has been added by a ${this.username}`);
}
}

const chai = new teacher("chai" , "sandeep@123" ,"123");
chai.addCourse();
 
const MasalaChai = new User("sandeep");
//MasalaChai.addCourse();  this will throw error because masalaChai came from user and user which is parent class cannot access Teacher which is children class 
MasalaChai.logMe() // this will not throw error error as LogMe is in User class 
chai.logMe(); //this will also not throw error as a child can access its parent class

console.log(chai === teacher);  //this does not compare two class it checks equality
console.log(chai instanceof teacher);   //this checks if the two classes are instances of each other


