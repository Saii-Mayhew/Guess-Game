
let targetNumber;
let attempts = 0;
let maxAttempts = 5;

let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn");
let attemptDisplay = document.getElementById("attempt");
let resultDisplay = document.getElementById("result");

function restartGame() {
    targetNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 0;

    guessInput.value = "";
    attemptDisplay.textContent = "Attempt 0/5";
    resultDisplay.textContent = "";

    guessBtn.style.display = "inline-block";
    restartBtn.style.display = "none";

    guessInput.focus();
}

function checkGuess() {
    let guess = Number(guessInput.value);

    if (guessInput.value === "" || !Number.isFinite(guess)) {
        return;
    }

    attempts++;

    attemptDisplay.textContent = "Attempt " + attempts + "/5";

    if (guess > targetNumber) {
        resultDisplay.textContent = guess + " is too high";
    } else if (guess < targetNumber) {
        resultDisplay.textContent = guess + " is too low";
    } else {
        resultDisplay.textContent = "You WIN";
        endGame();
        return;
    }

    if (attempts === maxAttempts) {
        resultDisplay.textContent = "You LOSE. The number was " + targetNumber;
        endGame();
        return;
    }

    guessInput.value = "";
    guessInput.focus();
}

function endGame() {
    guessBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    guessInput.value = "";
}

restartBtn.addEventListener("click", restartGame);
guessBtn.addEventListener("click", checkGuess);
