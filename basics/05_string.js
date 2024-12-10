const name = "Priyansh"
const repoCount = 50

// console.log(name + repoCount +  "Value");

// console.log(`Hello my name is ${name} and my count is ${repoCount} `);
  
const gameName = new String('Priyansh-garg-https')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

// const NewString = gameName.substring(0,7)
// console.log(gameName.substring(0,7));
const anotherString = gameName.slice(-2,7)
// console.log(gameName.slice(-2,7));
console.log(anotherString);

const newStringOne = "    PRIYANSH    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url ="https//priyansh.com/priyansh%1garg"
// const url ="https//priyansh.com/priyansh%20garg"

console.log(url.replace('%1','-'));

console.log(url.includes('priyansh'));

console.log(gameName.split('-'));
