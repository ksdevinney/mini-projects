let firstNumber = 0;
let targetNumber = 0;
let win = false;

// for correct answer
let higher;

// home for numbers
firstNumberEl = document.getElementById("first-number");
secondNumberEl = document.getElementById("target-number");

// button elements
const higherButton = document.getElementById("guessHigher");
const lowerButton = document.getElementById("guessLower");

// pick two numbers
function guessNumbers() {
    firstNumber = Math.floor(Math.random() * 11);
    targetNumber = Math.floor(Math.random() * 11);
    console.log(firstNumber, targetNumber);
    firstNumberEl.innerHTML = firstNumber;

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

function answerIsHigher() {
    event.preventDefault();
    if (higher) {
        win = true;
        alert("You win!");
    } else {
        alert("You lose!");
    }
    secondNumberEl.innerHTML = targetNumber;
}

// function very similar to answerIsHigher
// try to consolidate?
function answerIsLower() {
    event.preventDefault();
    if (!higher) {
        win = true;
        alert("You win!");
    } else {
        alert("You lose!");
    }
    secondNumberEl.innerHTML = targetNumber;
}

// game play
guessNumbers();
higherButton.addEventListener("click", answerIsHigher);
lowerButton.addEventListener("click", answerIsLower);