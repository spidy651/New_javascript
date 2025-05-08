let score = "33abc"
 let valueInNumber = Number(score)
 console.log(valueInNumber)
 console.log(typeof valueInNumber);

//Nan is the ooutcome when the given value is not a number  , NaN = NOT A NUMBER
//But in the typeof output it will give numbere even if it is not a number

let isBool = Boolean(1)
console.log(isBool);
console.log(typeof isBool);
//in this case it is returning true 
//and type of is returning boolean 
// if you write Boolean() and leave it empty it will give flase and if you write Boolean(abc) it will give true

let isNum = String(1245)
console.log(isNum) //this return 1245 
console.log(typeof isNum)   //this is returning string although it is a number