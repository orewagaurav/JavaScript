const nums  = [1,2,3,4,5,6,7,8,9]

const newNums = nums.filter( (i) => i>4 )
// console.log(newNums);

const newNums2 = nums.filter( (i) =>{
    return i>6
} )
// console.log(newNums2);     //scope open hoga to return lagega wrna nai 

// console.log(nums);

//map
const map1 = nums.map((i)=> i+10)
// console.log(map1);

//chaining

const chain = nums
                .map((i)=>i*10)
                .map((i)=> i+1)
                .filter((i)=> i>=25)

console.log(chain);
