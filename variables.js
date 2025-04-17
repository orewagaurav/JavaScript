console.log("Hello World");
console.log("code is running");
console.error("this is an error");

//variables
//var is declared globally
var a=10;
var b=20;
var c= 45;
console.log("sum",a+b+c+5);
console.log("sum"+(a+b+c+5));
console.log("sum"+a+b+c+5);
var name ="Gaurav";
console.log(name);
console.log(typeof name,typeof a);

const pi=3.14;
console.log(pi);

//let is declared locally or for block scope
let A=20;
let B=30;
let C=40;
console.log("Sum of A,B,C",A+B+C);
console.log("A is ",A);

{
    let A=50;
    console.log(A);
}
console.log("A is ",A);

//const is declared locally or for block scope
const P=20;
const Q=30;
const R=40;
console.log("sum of P,Q,R",P+Q+R);

//data types
//primitive data types
//number
//string
//boolean
//null
//undefined
//symbol

let num=10.13;
let str ="hello";
const bool = true;
let nullVar=null;
let undefinedVar= undefined;
// let symbolVar=symbol("Unique Identifier");

console.log(num,str,bool,nullVar,undefinedVar);
console.log(typeof num,typeof str,typeof bool,typeof nullVar,typeof undefinedVar);

//non-primitive data types
//object
//array
//function

//object
let obj={
    name:"Gaurav",
    age:20,
    "student id":4672,//it involves space so we use ""
    isStudent:true
}
console.log(obj);

obj.salary=88000
obj["student id"]=4678;
obj.isStudent=false;
obj.name="Raj";
obj.age=21;
console.log(obj);

const accountId = "1234";
let name34 = "Gaurav";
let work34 = "SWE";
var roll234 = 23;
//  accountId =345;
roll = 425;
console.table([accountId,name34,work34,roll234]);