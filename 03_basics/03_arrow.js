//this keyword refers to the current execution context

const user = {
    username: 'sunny',
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)

//in BROWSER window is the global context while in NODE {} is the global context


// function work(){    //we cannot use this in function , we can use in objects
//     let username = 'Sunny'
//     console.log(this.username)
// }

// work()


const work = () => {
    let username = 'Sunny'
    console.log(this)   //print nothing

}
work()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Sunny"})


console.log(addTwo(1,2))