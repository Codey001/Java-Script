const accountId = 12345;
let accountEmail = "abc@example.com";
var accountPassword = "12345";
let accountState;

// accountId = 123; //NOT ALLOWED

accountCity = "Jaipur";

accountEmail = "mnop@example.com";
accountPassword = "121212";
accountCity = "Bengaluru";

console.log(accountId);
/*
    Prefer not to use var
    because of issue in block scope and functional scope

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])