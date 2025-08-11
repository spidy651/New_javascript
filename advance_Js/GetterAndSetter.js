class User{
    constructor (email , password){
        this.email = this.email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();  //we are using _pass instead of pass to prevent a race between constructor and setter and avoid stack full error
    }
    set password(value){
        this._password = value;       
    }
}

const sandeep = new User("sandy@123" , "abc");
console.log(sandeep.password);


//ANOTHER SYNTAX using function

function User2(username , address){
    this._username = username
    this._address = address
Object.defineProperty(this , 'username' , {
    get: function(){
       return this._username.toUpperCase(); 
    } , 
    set : function (value){
       this._username = value;
    }
} )
Object.defineProperty(this , 'address' , {
    get: function(){
       return this._address.toUpperCase(); 
    } , 
    set : function (value){
       this._address = value;
    }
} )
}
const chai = new User2("sandeepmsr","udaipur");
console.log(chai.username);