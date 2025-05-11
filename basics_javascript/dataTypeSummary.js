//there are two types of data type 
// 1) primitive(call by value)  2) Non_primitive(call by referance)

//there are 7 types of primitive data type
//Big int , String , Number , Boolean , Null , Undefined , Symbol

//the non_primitive data types are
// Array , Object , Function

//SYMBOL  ( used for unique identification)
 const id = Symbol('123');
 const anotherId = Symbol('123')
console.log(anotherId==id)  //will give false result as both symbols are unique

//OBJECT
let MyObj = {
    name:"sandeep",
    age : 22,
}
console.log(MyObj);

//FUNCTION
const MyFuntion = function(){
    console.log("hello world")
}