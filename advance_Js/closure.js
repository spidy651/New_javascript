//closure give access to an outer functions scope from an inner function 

function init (){
    let name = 'firefox'
    function displayName (){
        console.log(name);
    }
    displayName();
}
init();

//note in the above function displayName there is no var named 'name' but still there are no errors showing it can access the values of its parent function 
//bhai bhai share nhi  karenge

function outer(){
    let username = "sandeep"
    function inner(){
        const BrotherElement = "middle";
        console.log("inner" , username);
    }
    function innerTwo(){
        console.log("innerTwo" , username);
        console.log("middle" , BrotherElement);  //this will also give error as BrotherElement is present in inner
    }
    inner()
    innerTwo();
}

outer()
console.log("too outer" , username); //this will give error as we are trying to access username outside outer function