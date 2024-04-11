class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email  = value;
    }


    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

//we need to define getter and setter both , only one is not possible

//earlier before this._password :- constructor is setting password and setter is also setting password and there becomes a race in the two to set password that ultimately fills the entire call stack

//in order to solve we use different _password method to get and set propery of password

//in getter and setter the name of property is same as name of method

const sunny = new User("sky@email.com", "abc");
console.log(sunny.password)