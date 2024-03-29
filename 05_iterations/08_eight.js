//at first initial value is sent to the accumulator after the result of the calculation is stored in the accumulator

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`)
//     return acc + curVal
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        name: "Apple",
        price: 10
    },
    {
        name: "Orange",
        price: 20
    },
    {
        name: "Banana",
        price: 30
    }
]

const totalPrice = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0)

console.log(totalPrice)