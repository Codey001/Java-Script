//global scope

if(true){   //block scope
    let a = 10
    const b = 20
    var c = 30
    
}


// console.log(a)
// console.log(b)
console.log(c)  // -> get printed out of scope

//** SCOPE IN NODE AND BROWSER ARE DIFFERENT */


let a  = 100;
if(true){ 
    let a = 50
    // console.log("Inner a : ", a)
}
// console.log(a)




function one(){
    const username = 'Sunny'

    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website)
    two()
    
}
one()


if(true){
    const username = 'Sunny'
    if(username=='Sunny'){
        const website = ' youtube'
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

//+++++++++++++++++++++++++INTERESTING +++++++++++++++++++++++++++
console.log(addOne(5))  //can access before initialization
function addOne(num){   //functions
    return num + 1
}


// addTwo(5)    // -> cannot access before initialization
const addTwo = function(num){   //expression
    return num + 2
}
