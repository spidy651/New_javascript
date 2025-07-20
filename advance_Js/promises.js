const PromiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
console.log("asynchronous task is resolved ");
 resolve();
    },1000)

   
    })
     PromiseOne.then(function(){
        console.log("promise is fullfilled");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("asynchronous 2 is completed");
        resolve();
    } , 1000)
}).then(function(){
    console.log("promise two is done");
})

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("hi i am sandeep");
        resolve({username:"sandeep" , email: "sandeepmsr123@gmail.com"});
    })
})
PromiseThree.then(function(user){
console.log(user);
})

const PromiseFour = new Promise(function(resolve , reject){
   
    setTimeout(function(){
         const error = false;
    if(!error){
        resolve({username:"sandeep" , email: "sandeepmsr123@gmail.com"});
    }
   else{
    reject("ERROR : something went wrong ");
   }
    } , 1000)

})

PromiseFour.then((user)=>{
    console.log(user);
    return user.username;   //this return is not going to any user//
}).then((username)=>{
    console.log(username);
     
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise has been rejected or resolved");
})

const PromiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
         const error = true;
    if(!error){
        resolve({username:"mohan" , email: "mohanmsr123@gmail.com"});
    }
   else{
    reject("ERROR :  JS went wrong ");
   }
    } , 1000) 
})
async function ConsumePromiseFive(){
    try{
        const response = await PromiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
ConsumePromiseFive();