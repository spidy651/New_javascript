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