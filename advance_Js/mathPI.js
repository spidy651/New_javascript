//why we cant change the value of pi just like variables
//lets find out 

console.log(`before changing ${Math.PI}`); //this will give value 3.14..
Math.PI = 5; //now lets print this and see

console.log(`after changind ${Math.PI}`);  //the value is still the same why is that 

//we can check it out by finding its property

    const Prop = Object.getOwnPropertyDescriptor(Math , "PI");
    console.log(Prop);

//so now we understand javascript restricted some properties so that we cannot change the value of Math.PI to avoid any confusion
//can we difine such properties too of our own object , yes we can lets see

const chai = {
    username : "shashwat" , 
    email : "123@kalaDhan",
    password : "123"
}
const User = Object.getOwnPropertyDescriptor(chai  , 'username');
//console.log(User);

//changing some property say enumerable 

Object.defineProperty(chai , "username",{  //used to change the property of the object
  enumerable : false   
})

//check it out by looping on the object

for (let [key , value] of Object.entries(chai)){
    if(typeof value !== "finction" ){   //to avoid iterating the function
   console.log(`${key}: ${value}`);
    }
}