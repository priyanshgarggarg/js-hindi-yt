// Primitive 

// 7 types : String, Number, Boolean(true false), null(empty), undefined(not define), Symbol(to make a value uniqe), BigInt

// const score =  100
// const scoreValue =  100.3

// const isLoggedIn = false 
// const outsideTemp = null
// let userEmail;

// const id = Symbol("123")
// const anotherId = Symbol('123')

// console.log(id === anotherId);




// const bigNumber = 233344557777854n


// Reference (Non primitive)

// Array, Objects, Function

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name : "Priyansh",
//     age: 18,
// }
// const myfunction = function(){
// console.log("Hello World");
// }
// console.log(typeof heros);
// // console.log(myObj);

// ++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive), Heap (Non-Primitive)

//   let myYoutubeName = "Priyanshgarggarg"
//   let another = "tyPriyansh"

//   console.log(another);
//   console.log(myYoutubeName);
  
let userOne ={
    email:"user@gmail.com",
    // upi :"User@001ybl"
    upi: "uer@ybl"
  }

  let userTwo = userOne

  userTwo.email = "Priyansh@gmail.com"

  console.log(userOne.email);
  console.log(userTwo.email);
  