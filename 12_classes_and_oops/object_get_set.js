const User = {
    _email: "sky@net.com",
    _password: "abc",

    get email(){
        return this._email;
    },

    set email(value){
        this._email = value;
    },

}


const tea = Object.create(User);
console.log(tea.email)