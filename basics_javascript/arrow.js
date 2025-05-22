//THIS IN FUNTION
const user2={
    username:"sandeep",
    price:199,
    welcomeMessage: function (){
        console.log(`${this.username} welcome to the website`) //this is used to access something in the same context
        //console.log(this) // this will print the current context that is object context simply means value   
    }
}
user2.welcomeMessage()

//lets try changing username and see if it affects funtion outpout
// user2.username = "sam"
// user2.welcomeMessage()   //yes it changes the value in the function also

//console.log(this);   //this will print {} why because it is not pointint toward any context in the node environment 
                     //but it will print window in the browser

// function chai(){
//     username="sandeep"
//     console.log(this) //this will print gibrish values or global values
//     console.log(this)  //this will print undefined

// }                     
//chai()

//if we make some small changes in the above function then the above funtion will convert into ARROW function

const chai2 = ()=>{
   let username ="sandeep"
   console.log(this.username); 
}
chai2()   //it will give undefined so that means you cannot use this in arrow funtion

//lets take an example of arrow funtion
const addTwo = (num1 , num2) =>{
    return num1+num2;
}
console.log(addTwo(3,4))
//the above arrow function could be also used as 
const addTwo2 = (num1,num2)=> num1+num2;  //it will give a implicit return cause we didnt mention return explicitly

//and suppose if we want to return an object 
const MyName = ()=> ({username :"sandeep"})
console.log(MyName())

//can also be used for array
const myArray =[2,5,6,3];
//myArray.forEach(()=>{}) //here foreach is a loop we will go in further details later

//--------(IIFE)-------//
//IIFE = immediately invoked function expression

//used for the files which need to start immediately after the start up cooperating a database
//also to avoid any global scope variable as it may pollute the file

(function One(){
console.log('DATABASE CONNECTED')    //to make it iffe use parenthesis
}) ();
//make sure you use semicolon before above iffe function otherwise it will show error also after this function too

//you can use this in arrow function also
(() =>{
console.log("DB CONNECTED TWICE")
})();

//you can also pass argument
((name)=>{
console.log(`DB CONNECTED TO ${name}`)
})('sandeep');
