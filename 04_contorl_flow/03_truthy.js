const userEmail = [];
//any value in string -> true
//if string is empty -> false
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//FALSY VALUE
// false, 0, -0, bigInt 0n, "", null, undefined, Nan

//TRUthy VALUE
//"0", 'false', " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// false == 0 -> true
// false == '' -> true
// 0=='' -> true



//Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15


console.log(val1)


// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")