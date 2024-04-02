const accountId=14423
let accountEmail="ravi@gamail.com"
var accoutPassword="43453"
accountCity="Ranchi"
let accountState

console.table([accountEmail,accountId,accoutPassword,accountCity,accountState])
/*
OUTPUT
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 'ravi@gamail.com' │
│ 1       │ 14423             │
│ 2       │ '43453'           │
│ 3       │ 'Ranchi'          │
│ 4       │ undefined         │
└─────────┴───────────────────┘
NOTE : 
1.VAR IS NOT PREFER BECAUSE OF THE SCOPE PROBLEM
2.CONST CANT BE CHANGED BUT LET CAN BE CHANGED
*/