function NewUser (username , LoginCount , isLoggedin){
this.username = username;      
this.LoginCount = LoginCount;
this.isLoggedin = isLoggedin;   
return this;
}

const userOne = new NewUser("sandeep" , 5 , true);  //new keyword creates multiple instance of the same object 
const userTwo = new NewUser("sukuna" , 1 , false );

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);  //this will give the reference of it own function


