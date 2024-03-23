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
// console.log(stringNumber)

// ---------------------------- OPERATIONS -------------------------------------

let val = 3
let negVal = -val
// console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)


let str1 = "hello"
let str2 = " ram"
let str3 = str1 + str2
// console.log(str3)

// console.log(typeof ("1" + 2))
// console.log(1 + "2")

// console.log("1" + 2 + 2)    //priority to string
// console.log(1 + 2 + "2")    //priority to int


// console.log(true)
// console.log(+true)  //=>conversion to int
// console.log(+"")    //=>conversion to int


