const marvel_heros = ["thor", "Iroman", "spiderman"]
const dc_heros = ["superman", "flsh", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros) // ye two arrays ko murge karn ke kaam aata hai
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const anotherArray = [1, 2, 3, 4, [5,6,7],8,9,[5,6,[5,6,7]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Priyansh"))
console.log(Array.from("Priyansh")) // to convert full syntaxt to array
console.log(Array.from({name: "Priyansh"})) // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
