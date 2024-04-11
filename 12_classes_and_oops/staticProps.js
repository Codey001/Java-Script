class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName ${this.username}`);
    }

    static createId(){
        return "123"
    }

}

const sunny = new User("sunny");
// console.log(sunny.createId())

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("iPhone", "i@phone.com")
console.log(iPhone.createId())
