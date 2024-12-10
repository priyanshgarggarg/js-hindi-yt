// ARRAYS

const myArr = [0,1,2,3,4,5]
const myHeros = ["krish", "bheem", "doremon", "sinchan"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// ARRAYS METHODS

// myArr.push(6)// isse values ko badha sakte hai 
// myArr.push(7)
// myArr.pop() //isse values ko eak kam krke print krte hai

// myArr.unshift(0) // isse aage value add ho jati hai 
// myArr.shift()

// console.log(myArr.includes(5)); // isme ham isse que puchhte hai 
// console.log(myArr.indexOf(3));

const newArrry = myArr.join()

// console.log(typeof newArrry);
// console.log(myArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,5)
console.log("B",myn1);

const myn = myArr.splice(1,5)
console.log("c",myn1);
console.log(myn);


