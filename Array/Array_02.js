const marvals_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const all_heros = marvals_heros.concat(dc_heros)

// console.log(all_heros)

// console.log(...marvals_heros, ...dc_heros) //spread operator


// console.log(Array.isArray('Sumit')) //check whether it is array or not
// console.log(Array.from("Sumit")) //onvert a string into an array


const score1 = new Number(200) 
const score2 = new Number(300) 
const score3 = new Number(400) 
const newScore = Array.of(score1, score2, score3)
console.log(newScore)
console.log(typeof newScore);

const newArray = [1, 2, 3, 4, [5, 6], 7, [8, 9, [3, 5]]]

console.log(newArray.flat(Infinity))