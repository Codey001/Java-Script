// arrays can contain elements of DIFFERENT data types

// arrays create SHALLOW COPY  - > share same reference
// DEEP COPY -> independent copies

const myArray = [0, 1, 2, 3, true, "hi"];
const myHeros = ["Iron Man", "HawkEye"];

const myArray2 = new Array(1, 2, 3); //no need to add square brackets
// console.log(myArray2);


// ---------------------------- ARRAY METHODS ------------------------------

myArray.push(5)
myArray.pop()

myArray.unshift(5)  //insert at start of array
// console.log(myArray)
myArray.shift() // pop item at start of array
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9))

const newArr = myArray.join()   //change the data type to string
// console.log(typeof newArr)



//------SLICE -> last range is not included
 console.log('A ', myArray)
 const myn1 = myArray.slice(1,3)

 console.log(myn1)
console.log('B', myArray)



//------SPLICE  -> that specific portion of the array is cut, and last range is also inluded
const myn2 = myArray.splice(1,3)

console.log(myn2)
console.log('B', myArray)