const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task completed")
        resolve(); //connect resolve to .then
    }, 1000);
})

// resolve is connected to .then

promiseOne.then(function(){
    console.log("Promise one consumed")
})




new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved');
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 3');
        resolve({username: "Coder", email:"Coder@gmail.com"});
    }, 1000);
})

promiseThree.then(function(data){
    console.log(data);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Coder", password: "123456"});
        }else{
            reject("ERROR : something went wrong")
        }
    }, 1000)
})

// promiseFour().then().catch()

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Coder", password: "123456"});
        }else{
            reject("ERROR : something went wrong")
        }
    }, 1000)
})

//promise is an object

async function consumePromiseFive(){
    try {
        const result = await promiseFive;
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const result = await fetch('https://api.github.com/users');
//         const data = await result.json();   //conversion also takes time
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR : ", error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))