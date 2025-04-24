let button =document.getElementById("btn");
let button2=document.getElementById("btn2");
let button3=document.getElementById("btn3");
button.addEventListener("click",()=>{
    alert("Button Clicked");
})

button2.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="Hello World";
})

button3.addEventListener("mouseover",()=>{
    document.querySelector(".box").style.backgroundColor="green";
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key);
})


