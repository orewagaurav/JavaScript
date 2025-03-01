console.log("It's working");

// let boxes=document.querySelector(".container").children;
let boxes=document.getElementsByClassName("box");
let nav=document.getElementsByClassName("container");
function randomColor(){
    let var1=Math.floor(Math.random()*(255-0+1)+0);
    let var2=Math.floor(Math.random()*(255-0+1)+0);
    let var3=Math.floor(0+Math.random()*255);
    return `rgb(${var1},${var2},${var3})`;
}
Array.from(boxes).forEach((e)=>{
    e.style.backgroundColor=randomColor();
    e.style.color=randomColor();
})
// console.log(boxes);
Array.from(nav).forEach((e)=>{
    e.style.backgroundColor=randomColor();
})