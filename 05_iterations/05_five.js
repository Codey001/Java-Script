const programming = ['js', 'rb', 'py', 'java', 'cpp']

// programming.forEach( function (item) {
//     console.log(item)
// })



// programming.forEach(  (item) => {
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}

// programming.forEach(printMe)

programming.forEach( (item, index, array) => {
    // console.log(item, index, array)
})

const myCodeing = [
    {
        languageName : "javascript",
        languageFileName: 'js'
    },
    {
        languageName : "java",
        languageFileName: 'java'
    },
    {
        languageName : "python",
        languageFileName: 'py'
    }

]

myCodeing.forEach( (item) => {
    console.log(item.languageName)
})