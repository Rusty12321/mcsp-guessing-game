let users = {};
let guessCount;
const playAgainMessage = `Would you like to play again? "yes" or "no"`;

function mainGame() {
    let name = prompt("Please enter your name.");
    let higherMessage = `Sorry ${name}, guess higher`;
    let lowerMessage = `Sorry ${name}, guess lower`;
    let secretNumber = Math.floor(Math.random() * (100 - 1) + 1);
    let answer = Number.parseInt(prompt("Guess what the secret number is between 1 and 100."));
    let guesses = [];
    let playAgain = "yes";
    guessCount = 0;

    while (playAgain.toLocaleLowerCase() === "yes") {
        guesses.push(answer);
        guessCount++;
        if (!Number.isInteger(answer)) {
            answer = Number.parseInt(prompt(`Sorry ${name}, that is not a number. please guess a number between 1 and  100`));
            continue;
        }
        if (answer < 1 || answer > 100) {
            answer = Number.parseInt(prompt(`Sorry ${name}, that number is not within the range of 1 and  100. please guess another number.`));
            continue;
        }
        if (answer === secretNumber) {
            guesses.pop();
            let pluralOrNotGuessCount;
            let pluralOrNotBetter;
            let pluralOrNotWorse;
            let better = guessCount - users[name];
            let worse = users[name] - guessCount;
            if (guessCount > 1) {
                pluralOrNotGuessCount = 'guesses';
            } else {
                pluralOrNotGuessCount = 'guess';
            }
            if (better > 1) {
                pluralOrNotBetter = 'guesses';
            } else {
                pluralOrNotBetter = 'guess';
            }
            if (worse > 1) {
                pluralOrNotWorse = 'guesses';
            } else {
                pluralOrNotWorse = 'guess';
            }
            if (users[name] === undefined) {
                if (guessCount > 1) {
                    alert(`That's correct ${name}! It took you ${guessCount} guesses. You previously guessed ${guesses}!`);
                } else {
                    alert(`That's correct ${name}! It took you ${guessCount} guess.`);
                }
            } else if (users[name] < guessCount) {
                alert(`That's correct ${name}! It took you ${guessCount} ${pluralOrNotGuessCount}. You did better in your last game by ${better}  ${pluralOrNotBetter}!`);
                } else if (guessCount < users[name]) {
                alert(`That's correct ${name}! It took you ${guessCount} ${pluralOrNotGuessCount}. You beat your previous attempt by ${worse} ${pluralOrNotWorse}!`);
            } else {
                alert(`That's correct ${name}! It took you ${guessCount} ${pluralOrNotGuessCount}. You had the same amount of guesses as your last game!`);
            }
            users[name] = guessCount;
            playAgain = prompt(playAgainMessage);
            while (playAgain.toLocaleLowerCase() !== "yes" && playAgain.toLocaleLowerCase() !== "no") {
                alert(`Sorry ${name}, I didn't catch that.`);
                playAgain = prompt(playAgainMessage);
            }
            if (playAgain.toLocaleLowerCase() === "yes") {
                mainGame();
                break;
            }
        } else if (answer < secretNumber) {
            answer = Number.parseInt(prompt(higherMessage));
        } else {
            answer = Number.parseInt(prompt(lowerMessage));
        }
        
    }
}

function getSecretNumber() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

mainGame();