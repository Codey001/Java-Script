// let score = "33abc"      //conversion to int => NaN
// let score = null            // convert to int => 0
// let score= undefined        // convert to int => NaN
// let score = true             // convert to int => 1
// let score =  false           // convert to int => 0
let score = "sunny"          // convert to int => NaN

// console.log(typeof score)
// console.log(typeof(score))

let valueInInt = Number(score)
// console.log(typeof valueInInt)
// console.log(valueInInt)

// NaN => number


// ---------------------------------------------------------------
// let isLoggedIn = false
let isLoggedIn = "hello"

let booleamIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleamIsLoggedIn)
// CONVERSION TO BOOL
// "" => false
// "hello" => true
// 1 => true
// 0 => false
// ----------------------------------------------------------------

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)
