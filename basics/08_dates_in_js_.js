 // Date

 let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

//  let myCreatedDate = new Date(2024,1,16) 
//  let myCreatedDate = new Date(2024,1,16,5,2) 
// let myCreatedDate = new Date("2024-01-4") 
let myCreatedDate = new Date("01-4-2024") 
//  console.log(myCreatedDate.toLocaleString());
 
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date() 
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//'${newDate.getDay()} and the time'

 newDate.toLocaleDateString('deefault', {
    weekday:"long"
 })
 console.log(newDate);
 