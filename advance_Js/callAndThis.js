//HERE WE WILL LEARN ABOUT call keyword and this keyword 

function setUsername (username){
    this.username = username;
    console.log("called")  // ---> to check if the function is being called 
}


function CreateUser (username , email , password){
setUsername.call(this , username);  //without call keyword you cannot call setName Directly 
this.email = email ;                //and  'this' is send expicitly becuase after using SetName all the variable are removed from current context
this.password = password ;
}

const chai = new CreateUser ("sandeep"  , "chai@fb.com" , "123");
console.log(chai);