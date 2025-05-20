//DATE is a object
let myDate = new Date()
//console.log(myDate);  //it will produce the date which will be difficult to read

//to convert it into more readable form we use conversion
console.log(myDate.toLocaleString());

//similarly,
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toString());

//you can also add specific date
// let myCreatedDate = new Date(2023,0,23);

 //or you can also add hour and min like given below
 let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toString());

//or
let myCreatedDate2 = new Date("2023-01-14"); //here the month start from 1
console.log(myCreatedDate2.toLocaleDateString());

//timestamp gives total time spent in miliseconds from a specific time 

let myTimeStamp = Date.now(); //it will give a huge number i.e the total time from a specific time
console.log(myTimeStamp); 

//timestamp is used for comparison of time between two occasion for ex--
console.log(myCreatedDate2.getTime());  //now you can compare these two i.e timestamp and myCreatedDate2

//you can also convert timestamp in sec by using maths----
console.log(Math.floor(Date.now()/1000));

//you can also view the timestamp in form of months or days
console.log(myDate.getMonth());
console.log(myDate.getDay());

//you can also customize the date format using .toLocalestring
myDate.toLocaleString('default',{
    weekday: 'long',    // "Sunday"
  year: 'numeric',    // "2025"
  month: 'long'      // "May"

} )