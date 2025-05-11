const age = 22;
const money = " 7000 millions";
const Name = " sandeep      "
//console.log( Name + age + money );

//instead of this you can make it into more readable form and follow a good practice
console.log(`hello my name is ${Name} and my age is ${age} an i have ${money} in my bank account`); //this symbol=` is bacstrick

const gameName = new String('sandeep');  //this syntax gives a key value to each individual letter that you can access
console.log(gameName[6]);  
console.log(gameName.substring(0,4));    //allow you to print a sub part of string
console.log(gameName.slice(-5,7));     //allow you to print reversibly a part of string
console.log(Name.trim());    //you might be not be able to see but it removes extra spaces 

let SecretCode = "sand$$p is going to b$ a billionar$";
console.log(SecretCode.replaceAll('$','e'));     //can replace all the letters mention with the letter mention in the letter

let splitCode = 'sandeep-can-achieve-anything-he-want';
console.log(splitCode.split('-'));  //with this you can split words divided by a symbol
