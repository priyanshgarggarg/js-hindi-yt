const accountId = 144553
let accountEmail = "priyansh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//  accountId = 2 // not allowed
 

accountEmail = "pg@gmail.com"
accountPassword = "45678"
accountCity = "pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//  console.log(accountEmail); 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
 