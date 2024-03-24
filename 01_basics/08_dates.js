//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)   //month start from 0
let anotherDate = new Date("2023-01-14")    //month start from 1 in yyyy-mm-dd format
let another1Date = new Date("14-02-2023")    //dd-mm-yyyy
// console.log(another1Date)
// console.log(myCreatedDate.toDateString())
// console.log(anotherDate.toDateString())


let myTimeStamp = Date.now() //or new Date().getTime()
// myTimeStamp = new Date().getTime()
console.log(myTimeStamp)

console.log(Math.floor(myTimeStamp/1000))



//Date.now() gives value in milliseconds => used for comparison


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())   //start from 0
console.log(newDate.getDay())   //sunday start from 0


console.log(newDate.toLocaleDateString('defaule', {
    weekday : "long"
}))