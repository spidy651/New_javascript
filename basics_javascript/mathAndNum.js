//in this file we will learn about maths and nums in javascript
//console.log(Math.abs(-23));

 console.log(Math.round(4.7)); //will give round off number
 console.log(Math.ceil(4.2)); //round off to lower value
 console.log(Math.floor(4.9)); //round off to to floor value

 console.log(Math.min(4,5,8,1,9));  //gives min value
 console.log(Math.max(4,8,2,23));   //gives max value


//RANDOM  --> gives random values b/w 0 and 1
const min = 10;
const max = 20 ;
console.log(Math.floor(Math.random()*(max-min +1)) + min);
