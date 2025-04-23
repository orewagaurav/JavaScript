const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body");

buttons.forEach(function (button){
    button.addEventListener("click",function(e){
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "red";
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "green";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "pink";
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "purple";
        }
    })
}); 

//pro version

// const colorMap = {
//     grey: "red",
//     white: "green",
//     blue: "pink",
//     yellow: "purple"
// };

// buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//         const bgColor = e.target.id;
//         const textColor = colorMap[bgColor];
//         if (textColor) {
//             body.style.backgroundColor = bgColor;
//             body.style.color = textColor;
//         }
//     });
// });