const accountId = 12445
let accountEmail = "sahil@google.com"
var accountPassword = "1345"

accountCity = "Jaipur" // we can also allocate memory without using keyword but this is not good
//if we not assign any value in variable so it gives undefined

let accountState; //semicolon is not necessary in js


// accountId = 2 // this is not allowed because it already fixed with const keyword

accountEmail = "sr@google.com"
accountPassword = "953742"
accoountCity = "Bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountId,accountPassword,accoountCity,accountState])// this will create a table of all in the bracket
