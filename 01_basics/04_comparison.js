// >
// >=
// <
// ==
// !=

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0); //false
console.log(null == 0); //false         conver to NaN
console.log(null <= 0); //true          convert to 0
console.log(null >= 0); //true

// comparison and equality check works differently in js

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined <= 0); //false
console.log(undefined >= 0); //false

//  STRICT CHECK
// === check datatype and value