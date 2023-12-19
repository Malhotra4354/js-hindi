const accountID = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState ;

// accountID = "536378" not allowed

console.log(accountID);

accountEmail = "hc@hc.com"
accountPassword = "343434"
accountCity = "Bangaluru"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])