let myName = "Gaurav    ";
let myGoal = "SWE    "
console.log(myName.length);
console.log(myName.trim().length);

Object.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(this.trim().length);
}
myName.trueLength()

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

const user ={
    name:"Luffy",
    email:"mugiwara@pirat.com"
}

const Teacher ={
    makeVid :true,
}

const TeachingSupport ={
    isAvailable:false
}

const TASupport = {
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:TeachingSupport
    
}
Teacher.__proto__= user

// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)