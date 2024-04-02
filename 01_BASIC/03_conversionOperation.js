let score="33"

console.log(typeof(score))
console.log(typeof score)

/*
string
string


*/
let valueInNuber=Number(score)

console.log(typeof valueInNuber)

/*

number

*/


let score2="33a"
let valueInNuber2=Number(score2)

console.log(typeof valueInNuber2)
/*

number


*/
let score3=null
let valueInNuber3=Number(score3)

console.log(typeof valueInNuber3)
console.log(valueInNuber3);

/*

number
0


*/

let score4=true
let valueInNuber4=Number(score4)

console.log(typeof valueInNuber4)
console.log(valueInNuber4);

/*

number
1


*/



/*

33=>33
"33abc"=>NaN
TURE=>1 || FALSE=>0


*/
