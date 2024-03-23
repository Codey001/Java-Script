
//     DATA TYPE

//     1. PRIMITIVE- call by value
//         7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreVal = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId) //false

const bigNumber = 1234564985161565n


//     2. NON-PRIMITIVE - call by reference

//         Array, Objects, Functions 


// * JS is dynamically types language        

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Sunny",
    age : 18
}

const myFunction = function(){
    console.log("hi there")
}

console.log(typeof myObj)

/* type of value                result
    undefined                   undefined
    null                        object
    boolean                     boolean
    number                      number  
    string                      string
    object                      object

    function                    function object

    https://262.ecma-international.org/5.1/#sec-5.1 --11.4.3

*/