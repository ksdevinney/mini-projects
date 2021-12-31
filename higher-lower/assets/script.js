let firstNumber = 0;
let targetNumber = 0;
let userGuess = 0;
let win = false;

let higher;

const higherButton = document.getElementById("guessHigher");
const lowerButton = document.getElementById("guessLower");

function guessNumbers() {
    firstNumber = Math.floor(Math.random() * 11);
    targetNumber = Math.floor(Math.random() * 11);
    console.log(firstNumber, targetNumber);
}

function buttonRespond() {
    console.log("hello");
}

guessNumbers();
higherButton.addEventListener("click", buttonRespond);
lowerButton.addEventListener("click", buttonRespond);