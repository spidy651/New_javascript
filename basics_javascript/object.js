//obeject are of two types 
//1.literals  2.singleton

//ex
const JsUser = {
  username :"sandeep",
  "email id":"sandeeprick@gmail.com",
  isLoggedIn: false,
  sex: "male",
  phoneNumber: 1234456779

}
//console.log(JsUser.phoneNumber);

//you can also access the object as
//console.log(JsUser["email id"]);  // [ ] notaition can be helpfull for symbol and accessing elements such as "new date": 12 
 
//to change values in object do the steps given below 
JsUser.email = "xyz@gmail.com";
//console.log(JsUser["email"]);

//if you want to make the values constant i.e no changes made will affect them use freeze
//Object.freeze(JsUser);
JsUser.username = "hitesh";
//console.log(JsUser.username);  //it will still give username as sandeep 

/* how to declare a symbol in obj */  //IMPORTANT
const MySymbol = Symbol("key1")
const NewObj = {
   [MySymbol]:"myKey1",
}
//console.log([MySymbol]);

//how to add a function in an object
JsUser.greeting = function(){
    console.log("hello JS user");
}
//console.log(JsUser.greeting());  //you must use parenthesis () after the function name else it will give output anonymus function

//nested object 
const regularUser = {
    email : "sandeep123@gmail.com",
    full_name: {
      usernamefullname: {
        firstname: "sandeep",
        lastname: "Mishra"
      }
    } 

}
//how to access the nested object
//console.log(regularUser.full_name.usernamefullname);  


//MERGING TWO OBJECT
const obj1 = { 1: 'a' , 2: 'b'}
const obj2 = {3: "a" , 4:"b"}

const obj3 = Object.assign({},obj1,obj2);
//console.log(obj3);

//second method by using spread
const obj4 = {...obj1 , ...obj3};
//console.log(obj4);  


//how to use objects in arrays 
const user = [
{
  id:1,
  email:"sandeep@gmail.com"
},
{
  id:2,
  email:"MonkeyKING@gmail.com"
},
{
  id:3,
  email:"rithesh@gmail.com"
},
{
  id:4,
  email:"HITESH@gmail.com"
}
] 
//here s how you can access
//console.log(user[2].email);

//here are some methods that you can use on an object 
console.log(JsUser);
//console.log(Object.keys(JsUser)); //Print keys of an objet in form of array
//console.log(Object.values(JsUser)); //print values of an objet in form of an aray
//console.log(Object.entries(JsUser)); //print the keys and values in form of array   



//HOW TO EXTRACT ELEMENT OF AN OBJECT

const course = {
  courseName: "jsHindi",
  coursePrice:"999",
  Instructor:"hitesh"
}
const{Instructor}=course;
console.log(Instructor);  //now you can access instructor like a usual variable 
//the above example is also known as destructuration 


//LITTLE ABOUT APIs
//API are normal objects but with little difference
//its syntax is given below
// {
//   "name":"hitesh",
//   "coursename":"is in hindi"
//   "price":"free"
// }