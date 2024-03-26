//object created from constructor -> singleton
// Object.create()  ->constructor mehtod



//object created from literal -> not singleton

const mySym = Symbol("key1")            //**** asked in INTERVIEW */

const JsUser = {    //internally keys are stored in string format
    name: "Sunny",
    "full name" : "sky net",
    [mySym] : "mykey1",         //mySym is used as symbol, outside square brackets it is used as string
    age: 18,
    // mySym : "mykey1",
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["sunday", 'friday']
}

// console.log(JsUser.name)
// console.log(JsUser['name'])
// console.log(JsUser['full name'])
// console.log(JsUser['mySym'])
// console.log(JsUser[mySym])

JsUser.age = 25
// Object.freeze(JsUser)
JsUser.age = 29 //we cannot make changes after the object is freeze

// console.log(JsUser.age)
// console.log(JsUser)




JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(JsUser.greeting())  //function is called
console.log(JsUser.greeting)    //we get reference to function, it is not executed

console.log(JsUser.greetingTwo())