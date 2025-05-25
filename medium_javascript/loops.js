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