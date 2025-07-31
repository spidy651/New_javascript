                                    //CLASSES //

 class User {

constructor(username , email , password)
{
this.username = username ;
this.email = email ;
this.password = password ;
 } 
 
 encryptPassword(){
    reuturn `${this.password}abc`
 }
 
 }

 const chai  =  new User("chai" , "chai@gmial.xx" , "123");
 console.log(User.encryptPassword());

 //the above code is working like this behind the scene 
 
//  function User(username , email , password){
//  this.username  = username ;
//  this.email = email ; 
//  this.password = password ; 
//  }

//  User.prototype.encryptPassword = function ( ){
//     return `$(this.password)abc` ;
//  }