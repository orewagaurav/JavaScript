const arr = [1,2,3,4]
const red = arr.reduce( function (accumulator,currentValue){
    console.log(`acc:${accumulator} and current value:${currentValue}`);
    return accumulator + currentValue
},3)

console.log(red);

const arrow1 = arr.reduce( (acc,curr)=>{
    return acc +curr
},3)

console.log(arrow1);
