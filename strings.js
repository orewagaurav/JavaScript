console.log("Introduction to the Strings in JS");

let name ="Harry Potter";
let friend ="Ron Wisley"
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);

console.log(name.length);
console.log("My name is "+name+" and my friend's name is "+ friend);
//alternatives and able to use quotes
console.log(`My name is ${name} and my friends name is ${friend}`);//using backtic
console.log(`My name is ${name} and my "friend" name is ${friend}`);// using double quotes

let str="OrewaGaurav";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

//slicing in string
console.log(str.slice(2,6));
console.log(str.slice(2));
console.log(str.slice(-1));
console.log(str.replace("Orewa","I am "));
console.log(str.concat(name));
console.log(str.concat(name,"Sigma🗿","Dank"));
console.log(name.trim());

//strings are immutable 
console.log(str);
console.log(str.charAt(1));
console.log(str.indexOf("Ga"));
console.log(str.startsWith("Or"));
console.log(str.endsWith("Ga"));

