function setUsername(username){
    //complex DB calculation
    this.username = username;
    console.log("called")
}

function createUser(username, password, email){
    setUsername.call(this, username);//pass the current execution context (this) so that the called fuction use current exection context not its own that is deleted after the function call
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "123", "chai@gmail.com");
console.log(chai);
