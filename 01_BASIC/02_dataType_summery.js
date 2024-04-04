// DATA_TYPES
//1.primitive 
//7 types : string ,BigInt ,Boolean, null,Number,undefined,symbol
const str="ravi"
const bigNumber=234455436787579576n
const ans=true;
const res=null;
const num=532;
const udfined_number=undefined;
const id=Symbol('123')
const anotherId=Symbol('123');

console.log(id==anotherId);//false


//2.rEFFERENCE (Non-Primitive)

//Array,Objects,Functions

//Array :
let arr=[1,2,3,4];
for(let index=0;index<arr.length;index++){
    console.log(arr[index]);
}
let myObj={
      name:"ravi",
      age:20,
      address:"Giridih" 
    }
    console.log(myObj.name)
    console.log(myObj.age);
    console.log(myObj.address);

const myFunction=function(){
    console.log("Hello world");
}
myFunction()




//************************stack and heap******************* */
//stack : primitive data type and only copy the value
//heap :(non primitive) give the refrence
let myName="ravikant";
let anotherName="turi";
anotherName="vishal"

console.log(myName)//ravikant
console.log(anotherName);//vishal
// primitive data type in stores in stack and directly copy the value,so it is giving the different value
let oneUser={
    email:"ravi@google.com",
    upi:"ravi@ybl"
}
let twoUser=oneUser;
twoUser.email="another@google.com";
console.log(oneUser.email);//another@google.com"
console.log(twoUser.email);//another@google.com"

// reason : both have same changed email because it nonpremitive data type and 
// non primitive data type stros in heap not in stack and it share the referece 


