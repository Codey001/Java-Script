function sayMyName(){
    console.log("S")
    console.log("U")
    console.log("N")
    console.log("N")
    console.log("Y")
}
sayMyName // -> reference to function
// sayMyName()

// function addTwoNumbers(number1, number2){   //PARAMETERS
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2){   //PARAMETERS
    return number1 + number2
}


addTwoNumbers(1,'4')    // 14
addTwoNumbers(2, 'a')   //ARGUMENTS

const sum = addTwoNumbers(2,8)
// console.log(sum) 



function loginUserMessaage(username = 'sam'){
    if(username === undefined ){
        console.log("Please enter your username")
        return
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessaage("Sunny"))
console.log(loginUserMessaage())


function calculateCartPrice(val1, val2,...num1){ //rest operator -> bundle into array
    return num1
}

console.log(calculateCartPrice(10,20,30,900))



const user ={
    username: "sunny",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "sunny",
    price: 199
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))