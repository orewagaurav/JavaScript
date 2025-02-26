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
// console.log(arr.toString());

