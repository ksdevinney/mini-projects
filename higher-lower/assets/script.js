let firstNumber = 0;
let targetNumber = 0;
let userGuess = 0;
let win = false;

// for correct answer
let higher;

// button elements
const higherButton = document.getElementById("guessHigher");
const lowerButton = document.getElementById("guessLower");

// pick two numbers
function guessNumbers() {
    firstNumber = Math.floor(Math.random() * 11);
    targetNumber = Math.floor(Math.random() * 11);
    console.log(firstNumber, targetNumber);

    // find out if the second number is higher than the first
    if (firstNumber > targetNumber) {
        higher = false;
    } else if (firstNumber < targetNumber) {
        higher = true;
    } else {
        // if they are equal, roll again
        guessNumbers();
    }
}

// how to get this for only one button?
function buttonRespond() {
    event.preventDefault();
    console.log("hello");
}

function answerIsHigher() {
    event.preventDefault();
    if (higher) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

function answerIsLower() {
    event.preventDefault();
    if (!higher) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

guessNumbers();
higherButton.addEventListener("click", answerIsHigher);
lowerButton.addEventListener("click", answerIsLower);