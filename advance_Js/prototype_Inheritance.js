//INHERITENCE --> HOW TO LINK TWO OBJECTS 

const User = {
    name : "sandeep",
    email : "jssaten@ac.in"
}

const Teacher = {
    makeVedio : true 
}

const TeachingSupport  = {
    isAvailable : false  
}

const TAsupport = {
    makeAssignment : `JS Assingment`,
    fullTime : true ,
    __proto__:TeachingSupport  //THIS KEYWORD __proto__ IS USED FOR LINKING TWO OBJECT 
}

//YOU CAN ALSO DO THIS EXTERNALLY 
Teacher.__proto__ =  User ; 

//THE ABOVE CODE IS OUTDATED NOWADAYS 


console.log(Teacher.name);


//NOWDAYS WE USE MODERN SYNTAX WHICH IS GIVEN BELOW 

Object.setPrototypeOf(TeachingSupport , Teacher);     
console.log(TeachingSupport.makeVedio);
