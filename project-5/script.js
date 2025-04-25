const randomColor  = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i= 0;i<6;i++){ //q ki hex color code 6 digit ka hota hai
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    function ChangeBgColor(){
        document.querySelector("body").style.backgroundColor = randomColor()
        document.querySelector("body").style.color = randomColor()
    }
    if(!intervalId){
        intervalId = setInterval(ChangeBgColor,1000);
    }
    
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId =null;
    document.querySelector("body").style.background="#1b0d1e";
    document.querySelector("body").style.color="red";
}

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);
