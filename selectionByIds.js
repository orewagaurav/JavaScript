console.log("Hmlo coder bhaiya");
let boxes=document.getElementsByClassName("box");
console.log(boxes);
console.log(boxes.length);
console.log(boxes[0]);

boxes[2].style.backgroundColor="olive";
boxes[0].style.backgroundColor="red";
boxes[4].style.backgroundColor="yellow";

let ids=document.getElementById("pink");
ids.style.backgroundColor="pink";
ids.style.color="green";

document.getElementById("nami").style.backgroundColor="orange";
document.getElementById("nami").style.color="red";

document.querySelector(".box").style.backgroundColor="blue";//it will change the first box color to blue