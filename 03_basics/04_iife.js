// Immediately Invoked Function Expressions (IIFE) -> to prevent the pollution from global scope

(function db_connect(){     //named IIFE function
    console.log("db connected")
})();

// (function defination)(function execution)

( () => {   //IIFE function
    console.log("DB connected two")
} )();

//use semicolon to end the context of previous IIFE execution

( (name) => {
    console.log(`DB connected three ${name}`)
} )('sunny')