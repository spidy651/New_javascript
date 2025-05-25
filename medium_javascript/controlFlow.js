let a = 10;
let b = 23
if(a<b){
    console.log("a is smaller than b")
}
else{
    console.log("b is smaller")
    };
  
 //switch case   

let month = 8
    switch(month){

   case 1:
   console.log("janurary")
   break;

   case 2:
    console.log("february")
    break;
    
    case 3:
        console.log("march")
        break;
    case 3:
        console.log("april")
        break;
    case 3:
        console.log("may")
        break;

        default: 
        console.log("not a month")
}
if(" "){
    console.log("TRUTHY VALUES")
}
//Truthy values are the values that are treated always as true 
//examples of truthy values are "0",'false'," ",[ ],{ }

//falsy values are those values that are always considerd false
//example = false , 0 , -0 , BigInt 0n , "" ,null , undefined , NaN


//how to check if an object is empty or not 
const EmptyObj = {}
if(Object.keys(EmptyObj).length===0){
    console.log("object is empty")
}

//how to check if an array is empty
let userEmail = ""
if(userEmail.length===0){
    console.log("userEmail is empty")
}

//NULLISH COALESCING OPERATOR
let val1;
val1 = 5??10
console.log(val1) //it takes first value mostly unless it encounter null or undefined 

let Val2 ;
Val2 = null??34;
console.log(Val2) //this ex has null first so it took the sec value

