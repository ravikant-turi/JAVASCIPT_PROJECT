console.log("WELCOME TO STRING ");

const name="ravikant";
const repoCount=50;
// console.log(name+repoCount+" value ");
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//decleare the string 

const gameName= new String("hello worold");
// console.log(gameName);
for (let index = 0; index < gameName.length; index++) {
    const element = gameName[index];
    // console.log(element);
    
}

//PROPERTY OF STRING
// console.log(gameName.__proto__);//{}

// console.log(gameName.toUpperCase());//HELLO WOROLD
// console.log(gameName.length);//12
// console.log(gameName.charAt(2));//l
// console.log(gameName.indexOf('s'));//-1
// console.log(gameName.indexOf('l'));//2

const newString =gameName.substring(0,4);//(include,exclude);
console.log(newString);//hell

const anotherString=gameName.slice(2,5);
console.log(anotherString);//llo
