const randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guess");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prev = [];
let numGuess =1;
let playGame = true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
    })
}

function validateGuess(guess){
    //
}

function checkGuess(guess){
    //
}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //
}

function endGame(){
    //
}

function newGame(){
    //
}