// console.log("Introduction to the Function in JS");

// function Ftn(name){
//     console.log("Hlw my name is "+name);    
//     console.log("hey "+name+" you are nice");
//     console.log("Wow "+name+" your T-shirt looks Awesome");    

// }
// Ftn("Gaurav");
// console.log("\n");
// Ftn("Raunak");

// //arrow function
// const arrow =(x)=>{
//     console.log("Hlw,  I am a Arrow function "+x);
// }
// arrow(90);
// arrow(34);


function add(x,y){
    let z = x+y;
    return z; 
}
// console.log(add("gaurav",4));

function loginUserMessage(username="orewagaurav"){
    if(!username){
        return "plz enter username first..." 
    }
    return `${username} just logged in...`;
}
  
let f = loginUserMessage("hmlo");
// console.log(f);

function calculateCartPrice(...num){
    return num;
}
// console.log(calculateCartPrice(23,12,45,67));

const user = {
    name:"Gaurav",
    age:20,
    location:"Noida",
    email:"orewagaurav@gmail.com"
}

function handelObject(anyObject){
    if(!anyObject) return -1;
    return `User's name is ${anyObject.name} and his age is ${anyObject.age}`
}
// console.log(handelObject(user));

const arr =[1,2,3,4,5,6,7];
function getArr(anyArr){
    return anyArr[3];
}
// console.log(getArr(arr));


//arrow function
//  console.log(this);

(function code(name){
    //named IIFE
    console.log(`Aaeye dekhte hai ${name}`);
    
})("Raunak");

( (user)=>{//unnamed IIFE
    console.log(`Hemlo ${user}`);
})("Gaurav !"); 
 