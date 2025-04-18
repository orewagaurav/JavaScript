//object literals

const mySym = Symbol("key1");

const jsUser = {
    name:"Gaurav",
    "known AS":"orewagaurav",
    [mySym]:"mykey1",
    age: 20,
    location: "Noida",
    email:"orewagaurav1@gmail.com",
    isLoggedIn:false,
    lastLoginDate: ["Monday","Saturday"]
}
console.log(jsUser.name);
console.log(jsUser["email"]); 
console.log(jsUser["known AS"]); 
console.log(jsUser[mySym]);

// Object.freeze(jsUser);//not allow to manipulate the obj

jsUser.name="zoro";
console.log(jsUser.name);
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting); 
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
}
jsUser.name = "Gaurav";
console.log(jsUser.greeting2());




 

