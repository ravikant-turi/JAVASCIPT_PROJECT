console.log("===========DATE AND TIME=============");
// DATE
let myDate=new Date();
// console.log(myDate)//2024-04-04T18:28:58.545Z
// console.log(myDate.toString);//[Function: toString]
// console.log(myDate.toDateString());//Thu Apr 04 2024
// console.log(myDate.toLocaleDateString());//4/4/2024
// console.log(typeof myDate);//object


let myCreateDate=new Date(2024, 4 ,5);
// console.log(myCreateDate.toDateString());//Sun May 05 2024

// let myCreateDate=new Date(2023,0,23,5,3);//2023-01-23T05:03:00.000Z
// console.log(myCreateDate);


// let myTimeStapm=Date.now();
// console.log(myTimeStapm);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('defalut' ,{
    weekday: "long",
   
})











