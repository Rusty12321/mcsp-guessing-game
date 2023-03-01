let users = {};

function mainGame() {
    let name = prompt("Please enter your name.");
    let secretNumber = Math.floor(Math.random() * (100 - 1) + 1);
    let answer = Number.parseInt(prompt("Guess what the secret number is between 1 and 100."));
    let guessCount = 1
    let guesses = [];
    let playAgain = "yes";

    while (playAgain === "yes") {
        if (!Number.isInteger(answer)) {
            answer = Number.parseInt(prompt(`Sorry ${name}, that is not a number. please guess a number between 1 and  100`));
            continue;
        }
        if (answer < 1 || answer > 100) {
            answer = Number.parseInt(prompt(`Sorry ${name}, that number is not within the range of 1 and  100. please guess another number.`));
            continue;
        }
        if (answer === secretNumber) {
            if (users[name] === undefined) {
                alert(`That's correct ${name}! It took you ${guessCount} guesses. Your previous guesses were ${guesses}!`);
            } else if (users[name] < guessCount) {
                alert(`That's correct ${name}! And you did better in your last game by ${guessCount - users[name]} fewer guesses!`);
            } else if (guessCount < users[name]){
                alert(`That's correct ${name}! And you beat your previous attempt by ${users[name] - guessCount} fewer guesses!`);
            } else if (users[name] === guessCount) {
                alert(`That's correct ${name}! You had the same amount of guesses as your last game!`);
            }
            users[name] = guessCount;
            playAgain = prompt(`Would you like to play again? \"yes\" or \"no\"`);
            while (playAgain !== "yes" && playAgain !== "no") {
                alert(`Sorry ${name}, I didn't catch that.`);
                playAgain = prompt(`Would you like to play again? \"yes\" or \"no\"`);
            }
            if (playAgain === "yes") {
                mainGame();
                break;
            }
        } else if (answer < secretNumber) {
            answer = Number.parseInt(prompt(`Sorry ${name}, guess higher`));
        } else {
            answer = Number.parseInt(prompt(`Sorry ${name}, guess lower`));
        }
        guesses.push(answer);
        guessCount++;
    }
}

function getSecretNumber() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

mainGame();