//IF

// <, > , <=, >= , ==, !=, === , !==

const temperature = 40

// if(temperature == 40){
//     console.log('temperature is 40')
// }else{
//     console.log('temperature is not 40')
// }

// const score = 200
// if(score > 100){
//     const power = 'fly'
//     console.log(`user power :  ${power}`)
// }


//---------DONT DO-----------------
const balance = 1000
// if(balance > 100) console.log("test"),
// console.log("test2");


// if(condition 1){
    
// }else if(condition 2){

// }else if(condition 3){

// }else{

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}