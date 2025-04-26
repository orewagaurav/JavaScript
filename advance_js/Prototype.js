let myName = "Gaurav    ";
let myGoal = "SWE    "
// console.log(myName.length);
// console.log(myName.trueLength);


let myHeroes = ["Thor","Captain","IronMan"]

let myHeroesPower = {
    Thor:"Thunder",
    Captain:"Will",
    IronMan:"Money+Brain",

    getThorPower: function(){
        console.log(`Thor power is ${this.Thor}`);
        
    }
}

Object.prototype.gaurav = function(){
    console.log(`Gaurav is present in all object`);
    
}

Array.prototype.zoro = function(){
    console.log("Hey Kaido !");
}

// myHeroesPower.gaurav()
myHeroes.gaurav()
// myHeroesPower.zoro()


//inheritance