const myArray = [0 , 1 ,2 ,4 , 'sandeep' , 'god']
console.log(myArray);   //in Javascript arrays are resizeable

//deep copy = a deep copy of an object is a copy whose properties do not share some reference 

//shallow copy = A Shallow copy of an object is a copy whose proerties some reference 

/*array copy operation in java creates shallow copies */

//you can also declare array as
const myNewArray = new Array(1,3,4,6);
console.log(myNewArray);

myNewArray.push(3);
myNewArray.push(5);
myNewArray.pop();
//console.log('after push and pop operation ',myNewArray);

myNewArray.unshift(9) //add element in the starting of the arrray
myNewArray.unshift(0)
myNewArray.shift() //removes the starting element


const JoinedArray = myNewArray.join();
//console.log(JoinedArray);
//console.log(typeof(JoinedArray));  //this is surprising as it gives output as a string

//SLICE AND SPICE
console.log("myNewArray before slice and splice operation",myNewArray)
const slicedArray = myNewArray.slice(0,3);
console.log("myNewArray after slice",slicedArray);//print a portion of array and does not bring changes to the original array , index 3 is not considered

myNewArray.splice(0,3);
console.log('after the splice',myNewArray); //also print a portion of array and does bring changes to the original array index 3 is considered

//you can join two arrays using .concat , .spread
const marvel_heroes = ["ironman" , "spiderman" , "hulk"]
const dc_heroes = ["batman" , "wonderWomen" , "flash" , "aquaman"]
const all_Heroes = [...marvel_heroes,...dc_heroes];
//console.log(all_Heroes);  //spread is like breaking a glass 

//if you an array inside an another array you can break it down using .flat
const another_array = [1,2,3,[4,5,[6,7]]];
const real_Another_Array = another_array.flat(Infinity); //in place of infinty you can choose a depth of 1 or 2 
//console.log(real_Another_Array);

//you can covert another data type in array
console.log(Array.from("sandeep")); //the given string will be converted into array
 //you can check if the given value is array or not by using is arrray
 console.log(Array.isArray("salman khan"));


 //there is a interesting case 
 console.log(Array.from({name: 'sandeep'})) //here we are trying to convert an object into an array
 //but it will give empty string 

 


                                            
 
