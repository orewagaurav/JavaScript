// console.log("Introduction to the Loops in JS");
// //type of loops in js

// // 1.for loop
// // 2.while loop
// // 3.do-while loop
// // 3.for in loop
// // 4.for of loop

// let a=1;

// for(let i=0;i<50;i++){
//     console.log(a+i);
// }
// //for in loop
// let obj={
//     name:"Gaurav",
//     roll:23,
//     studentId:2301331720023,
//     school:"ABPS"
// }
// for(let key in obj){
//     let value =obj[key];
//     console.log(key,value);
// }

// //for of loop
// for (const c of "Gaurav Kumar") {
//     console.log(c);
// }

// //while loop
// let wil=0;
// while(wil<18){
//     console.log(wil);
//     wil++;
// }

// //do while 
// let d=1;
// let e=2;
// do {
//     console.log("its false");
//     d++;
// } while (d==e);

// const arr = [1,2,3,4,56,67]
// // for(const i of arr){
// //     console.log(i);
// // }
// for (i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }

// const greeting = "Hello World"
// for(const i of greeting){
//     // if(i==" "){
//     //     continue;
//     // }
//     if(i==" "){
//         break;
//     }
//     console.log(i);
// }


//maps

const map =new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("UK","UNITED KINGDOM")

// console.log(map);

// for(const i of map){
//     console.log(i);
// }
// for(const [i,j] of map){
//     console.log(i,"=>",j);
// }

const obj ={
    name:"Gaurav",
    roll:"23",
    location:"Noida",
    work:"SWE"
}
//obect  is not iterable by for of
// for(const i of obj){
//     console.log(i);
// }

// for(const i in obj){
//     console.log(`${i} is ${obj[i]}`);
// }

const language = ["js","python","java","cpp","c","css"]

// language.forEach( function (i){
//     console.log(i,i.length)
// } )

// language.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// } )
