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