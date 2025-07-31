//STATIC_PROPERTIES OF CLASSES//

class User {
constructor(username){
this.username = username;
}
logMe(){
    console.log(`username is ${this.username}`);
}
 static createId(){
 return `123`;
}
}

const sandeep = new User("sandeep");
console.log(sandeep.createId());

//if we want that no one can access id then we can use staitc keyword before that and even you extend this class to another class you will still not be able to access it 
 //example

 class teacher extends User {
constructor(username , email){
super(username);
this.email = email;
}
 }
 const iphone = new teacher("iphone" , "iphone@123");
 console.log(iphone.createId());   //this will also give error of static keyword is used