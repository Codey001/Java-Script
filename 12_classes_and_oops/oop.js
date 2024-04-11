const user = {
    username: "sunny",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username : ${this.username}`);
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Hello ${this.username}`);
    }

    return this;
}

// const userOne = User("sunny", 12, true);
// const userTwo = User("ram", 10, false)
// console.log(userOne)


const userOne = new User("sunny", 12, true);
const userTwo = new User("ram", 10, false)
console.log(userOne.constructor)
// console.log(userTwo)

/* when we user new keyword
1. a new instance of object is created
2. constructor function is called
3. all the parameters are injected into this
4. we get the ultimate result


*/