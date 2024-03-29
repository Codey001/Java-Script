const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num+10)


const newNums = myNums
                    .map( (num) => num*10)
                    .map( (num) => num + 10)    //first val is not 1 it is 10
                    .filter( (num) => num>50)
console.log(newNums)