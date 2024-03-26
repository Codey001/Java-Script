//const tinderUser= new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName: "sky",
            lastName: "net"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

const obj4 = {obj1, obj2}
// console.log(obj4)
const obj3 = {...obj1,...obj2}

// console.log(obj3)

const obj5 = Object.assign(obj1, obj2)  //obj5 is same as obj1 as obj2 is combined with obj1

// or
const obj7 = Object.assign({}, obj1, obj2)  //it is guaranteed that result of 2 objects is also {}

// console.log(obj5)
// console.log(obj7)

const users = [
    {
        id: 1,
        email: "abc@example.com."
    },
    {
        id: 2,
        email: "abc2@example.com."
    },
    {
        id: 3,
        email: "abc3@example.com."
    },

]

console.log(users[1].id)

console.log(tinderUser)
console.log(Object.keys(tinderUser))    //store the keys in array

console.log(Object.values(tinderUser))    //store the values in array

console.log(Object.entries(tinderUser))    //store the keys and values in array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    //check if property exist



//  --------------------------------DESTRUCTURING-------------------------------
const course = {
    courseName: "Coding with codey",
    price : "999",
    courseInstructor: "Codey"
}

course.courseInstructor;

const {courseInstructor: instructor} = course
console.log(instructor)

// ---------------------------------JSON------------------------------------
// both key and value are strings
// {
//     "courseName": "Coding with codey",
//     "price": "999",
//     "courseInstructor": "Codey"
// }

