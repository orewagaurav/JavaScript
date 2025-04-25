const randomColor  = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i= 0;i<6;i++){ //q ki hex color code 6 digit ka hota hai
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
const startChangingColor = function(){
    
}
const stopChangingColor = function(){

}

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);
