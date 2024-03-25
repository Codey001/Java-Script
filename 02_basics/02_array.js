const marver_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marver_heros.push(dc_heros) //entire array is pushed

// console.log(marver_heros)

// const all_heros = marver_heros.concat(dc_heros)
// console.log(all_heros)

//------SPREAD OPERATOR-----
const all_heros = [...marver_heros, ...dc_heros]
console.log(all_heros)


// ----------------------
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)    //depth

console.log(realAnotherArray)


console.log(Array.isArray("raman")) // -> tell if it is array
console.log(Array.from("naman"))    // -> convert to array

//   INTERESTING- INTERVIEW

console.log(Array.from({name: "ram"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
