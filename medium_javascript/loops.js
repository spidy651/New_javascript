//loops or iterators
const array = [1,2,3,4,5,6]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(`value is ${element} and index is ${index}`)
   
}

//table
let table = 2
while(table<=10){
    for(let i = 1 ; i<=10;i++){
//console.log(table + "*" + i + "=" + (table*i))
} 
table++;
}

let time = 8 
do{
   // console.log("not open")
    time++
}
while(time<=11)

    //ARRAY SPECIFIC LOOPS

    //FOR OF LOOP
    const arr = [1,4,3,9]
    for (const num of arr) {
        //console.log(num)
    }
    //another ex
    const greeting = "hello world"
    for (const i of greeting) {
       // console.log(i)
    }

    //Map (object) - hold key value pairs and no dublicate value
    const map = new Map()
    map.set("IN","india")
    map.set("USA","United state of america")
     map.set("USA","union salvadore antartica") //this will overwrite the previous value as no dublicates are allowed
    //console.log(map)
    
//forof loop on the map

// for (const element of map) {
//     console.log(element)
// }

for (const [key,value] of map) {   //this is another way of applying for of  loop on the map
   //console.log(key ,':-' ,value); 
}

//Applying for of on the object
const newObject = {
    place:"tokyo",
    Transport:"bus",
    Total_Cost: 50000

}

//forof loop does not work on object it gives output not iterable

//   for (const element of newObject) {    
//    console.log(element)   
//    }         

//if we want to apply loop on object we can use for in loop 
for (const key in newObject) {
//console.log(newObject[key]);
}

//if you want to print both key and value
for (const key in newObject) {
    //console.log(`${key}  = ${newObject[key]}`)
}

//can we use it for array too (yes)

const program = ["js","cpp","py"]
for (const key in program) {
//console.log(`${key} = ${program[key]}`)
}

//FOREACH LOOP
const coding = ["ruby" , "cpp" ,"py"]
//here we use callback function (function name is not written i.e funtion(){})
coding.forEach(function(value){
    //console.log(value)
})

//for each in arrow function
coding.forEach((value)=>{
    //console.log(value)
})

//passing a normal function

function PrintMe(item){
console.log(item)
}
//coding.forEach(PrintMe)

//you can also pass other parameters other than item 
//example
coding.forEach (function(item,index,arr){
  //  console.log(item,index,arr)
})

//applying for each in array containing object
const myCoding = [
    {
     languageName:'javascript',
     filename:".js"
     },
    {
     languageName:'python',
     filename:".py"
     },
    {
     languageName:'c plus plus',
     filename:".cpp"
     },
    {
     languageName:'java',
     filename:".j"
     }
]
myCoding.forEach((item)=>{
    //console.log(item.languageName);
})

const values= coding.forEach((item)=>{
    //console.log(item)
    return item;
})
//console.log(values)   //from this ex we get to know that forEeach loop doesnt return anything 

//FILTERS (used to filter certain data fetched from database)

const myNums = [1,3,4,5,7,8]
const newNums = myNums.filter((num)=>num>4)
//console.log(newNums)

const books = [
    {
        title: 'book one' , genre : 'fiction' , publish :1981 , editon:2004
    },
    {
        title: 'book two' , genre : 'action' , publish :2000 , editon:2008
    },{
        title: 'book three' , genre : 'adventure' , publish :1985 , editon:2010
    },{
        title: 'book four' , genre : 'action' , publish :2002 , editon:2006
    },
    {
        title: 'book five' , genre : 'fiction' , publish :1998 , editon:2020
    }
]
let UserBooks =  books.filter((bk)=> bk.genre=='action')
//console.log(UserBooks)

//we can also check two conditon at the same time
UserBooks = books.filter((bk)=>{
    return bk.publish >=1985 && bk.genre == 'adventure'
}) 
//console.log(UserBooks)

//MAP (it return something unlike filter)
const myNewNum = [1,2,3,4,5,6,7]
const ResultNum = myNewNum.map((item)=>{
    return item +10
})
//console.log(ResultNum)

//CHAINING (Where we use multiple methods such as map and filter altogether
const MyNewNum2 = [1,2,3,4,5,6,7,8,9,10]
const newNum2 = MyNewNum2
                .map((item)=>item*10)
                .map((item)=>item+1)
                .filter((item)=>item>=40)
//console.log(newNum2)       

//REDUCE
const Arr = [1,2,3,4]
const initialValue = 0;
const SumWithInitial = Arr.reduce((accumulator,CurrentValue)=>accumulator+CurrentValue,initialValue);
//console.log(SumWithInitial)


//in form of arrow function
const Arr2= [1,35,5,7]
const Total =  Arr2.reduce((acc,CurrVal)=>acc+CurrVal,0)
//console.log(Total)

const shopping_cart = [
{
    item_name:"shampoo",
    item_price:290
},
{
    item_name:"perfume",
    item_price:399
},
{
    item_name:"shirt",
    item_price:899
},
{
    item_name:"trouser",
    item_price:2100
},
{
    item_name:"shoes",
    item_price:4000
}

]
const PriceTag = shopping_cart.reduce((delievery,item)=>delievery+item.item_price,0)
console.log(PriceTag)