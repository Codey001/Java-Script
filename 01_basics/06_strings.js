 const name = "Sunny"
 const repoCount = 20

//  console.log(name + " " + repoCount )    BAD SYNTAX

//STRING INTERPOLATION - inject values in placeholders
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Sunny')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCa/se()) //actual string is not changed as declared in stack

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

const newString = name.substring(0,3)   //can not give negative values
// console.log(newString) 

const anotherString = name.slice(-8,1)  //can give negative values
console.log(anotherString) 

const newStringOne = "       Sunny               "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://skynet.com/sky%20net"

console.log(url.replace('%20', '-'))
console.log(url.includes('sky'))

const gameTag = "sky-codey-net"
console.log(gameTag.split('-'))
