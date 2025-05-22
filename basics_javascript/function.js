function sayMyName(){
    console.log('c')
    console.log('r')
    console.log('o')
    console.log('w')
}
//sayMyName()

//another ex
function  addTwoNumbers(number1,number2){
console.log(number1+number2)
}
//addTwoNumbers(3,"4") 

//rest and spred
//in the example given below we have used rest ...num1 through which we can pass more number of argument at once

function calculateCartPrice(val1,val2,...num1){
return num1
}
//console.log(calculateCartPrice(200,400,600,800,1000))

//passing obj in function
const user={
    username:"sandeep",
    price:199
}
function handleObject(user){
    console.log(`username is ${user.username} and price is ${user.price}`)
}
//handleObject(user)

//Passing an array in a funtion
function Return_SecValue(getArray){
return getArray[1]
}
//console.log(Return_SecValue([100,300,500,700]))

//global scope in browser is somewhat different to global scope of node environment

