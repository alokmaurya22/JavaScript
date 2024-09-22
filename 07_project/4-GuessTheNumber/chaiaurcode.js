let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const paragraph = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true;
let guessSize = 3;

if (playGame) {
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid number.')
    } else if (guess < 1) {
        alert('Please Enter a valid number between 1 to 100.')
    } else if (guess > 100) {
        alert('Please Enter a valid number between 1 to 100.')
    }
    else {
        prevGuess.push(guess);
        if (numGuess === guessSize) {
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low.`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high.`)
    }
}


function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remainingCount = remaining.innerHTML = `${guessSize - numGuess + 1}`
    if (remainingCount === 0) {
        endGame();
    }
}


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    paragraph.classList.add('button')
    paragraph.innerHTML = '<button id="newGame">Start New Game</button>';
    startOver.appendChild(paragraph)
    playGame = false;
    // newGame()
}

function newGame() {
    let newGameButton = document.querySelector('#newGame')
    addEventListener('click', function (event) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${guessSize - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(paragraph);
        playGame = true;
    })
}
