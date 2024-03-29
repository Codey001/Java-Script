


const arr = [1,2,3,4,5,6]
for(const num of arr){
    console.log(num)
}

const greetings = "Hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//MAPS  
const map = new Map()
map.set('IN', "India")
map.set("FR", "france")
map.set("RU", "Russia")
map.set('IN', "India")

console.log(map)

for(const [key, value] of map){
    console.log(key, ":- ", value)
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for(const p of myObj){
//     console.log(p)
// }