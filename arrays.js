console.log("Introduction to the arrays in JS");

let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[5]);

//arrays are mutable
arr[0]=0;
console.log(arr);
arr[1]="Gaurav";
console.log(arr);
console.log(typeof(arr));

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.join("  "));

//pop
console.log(arr.pop());//pop out last element also delete last element
console.log(arr);
//push
arr.push(45);//add at last
// console.log(arr.push(23));
console.log(arr);

console.log(arr.shift());//gives element at 0;

arr.unshift("Ron");
console.log(arr);//add element at index 0

//shift and pop works similar
//push and unshift works similar

console.log(arr.length);
delete arr[3];
console.log(arr);
console.log(arr[3]);
console.log(arr.length);

let a1 =[1,2,3,4,5];
let a2 =[5,4,3,2,1];
let a3 = ["Ram","Ron","Rik"];
let con = a1.concat(a2,a3);
console.log(con);
//sort
console.log(a2.sort());

//splice
let num= [1,2,3,4,5,6,7,8,9,0];
num.splice(2,4);//2 is the position 4 is the no. of elements to delete
console.log(num);

let num1= [1,2,3,4,5,6,7,8,9,0];
num1.splice(3,2,23,45,67);//3 is the starting position 2 is the no. of elements to delete 23,45,67 will be added from index 3
console.log(num1);

console.log(num.reverse());

//loop in array
let arr1 =[1,23,45,12,67,89,9,34,56,7]
console.log(arr1);
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

arr1.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})


let arr2 =[1,23,45,12,67,89,9,34,56,7];
let newArr=[];
for(let i=0;i<arr2.length;i++){
    let element =arr2[i];
    newArr.push(element**2);
}
console.log(newArr);

//map doing same task with map
let newArr2=arr2.map(i=>{
    return i**2;
})
console.log(newArr2);

//filter
const greaterThan7=(e=>{
    if(e>7){
        return true;
    }
    return false;
})
console.log(arr.filter(greaterThan7));

//reduce 

const red=((a,b)=>{
    return a+b;
})
console.log(arr1.reduce(red));

//array.from
let name="Gaurav";
let crt=Array.from(name);
console.log(crt);

let rand;
rand =Math.random();//generates random no. between 0 and 1
console.log(rand);
let rand1 =Math.floor(Math.random()*10)+1;
console.log(rand1);


let arrr = [1,2,3,4,5,6,7];
// console.log(arr);

arrr.push(34);
arrr.pop()
arrr.unshift(45);
arrr.shift();

const newArrr= arrr.join();

console.log(arrr);
console.log(newArrr);
console.log(typeof(newArrr));
console.log(typeof(arrr));

const spcl = [9,8,7,6,5,4,3,2,1];
const newSpcl1 = spcl.slice(1,3); //does not change og array

console.log(newSpcl1);
console.log("A",spcl);

const newSpcl2 = spcl.splice(1,3);//changes og array by removing spliced value plus includes last range

console.log(newSpcl2);
console.log("A",spcl);

const marvel= ["Thor","Captain","Ironman"];

const dc = ["Superman","Batman","Aquaman"];
console.log(marvel);
console.log(dc);

marvel.push(dc);
console.log(marvel);

let newHero=marvel.concat(dc);
console.log(newHero)

const newSpread = [...marvel,...dc,...arrr];//merge two or more array
console.log(newSpread);
console.log(Array.from("Gaurav"));


