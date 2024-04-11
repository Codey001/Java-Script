// let myName = "sunny     ";
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sunny = function(){
    console.log("Sunny is present in all objects");
}

Array.prototype.heySky = function(){
    console.log(`Sunny said hello`);
}

// heroPower.sunny();
// myHeros.sunny();
// myHeros.heySky()
// heroPower.heySky()   -> do not have access to heySky


// INHERITANCE

const user = {
    name: "sunny",
    email: "sunny@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport

}

//accessing property of someone else is protupal inheritance

Teacher.__proto__ = user


//modern synatax
Object.setPrototypeOf(TeachingSupport, Teacher) //teaching support access teacher


let anotherUserName = "chaiUurCode           ";
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"Sunny".trueLength();
"CoderCodey".trueLength();

