// Need a function for genrating Random number
//To check number also keep attemp count and increase it at each call
// after winning or losing calling another function which asks if you want to play playAgain
// checking speeling and edge cases 
//


console.log(" Guess the Number (1–100) in Minimum Attempts");

const maxAttempt = 10;

// Function to generate a random number
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Main guessing function (with callback-style recursion)
function guessNumber(randomNum) {
  let attempt = 1;

  function play() {
    if (attempt > maxAttempt) {
      console.log(" You lost the game. Max attempts exceeded.");
      console.log(" The original number was:", randomNum);
      return askToPlayAgain();
    }

    const userChoice = Number(prompt(`Attempt ${attempt}/${maxAttempt}: Guess the number (1-100):`));

    if (isNaN(userChoice)) {
      console.log(" Not a valid number. Try again.");
      attempt++;
      play();
      return;
    }

    if (userChoice === randomNum) {
      console.log(` Congrats! You guessed the number ${userChoice} correctly in ${attempt} attempts.`);
      return askToPlayAgain();
    } else if (userChoice < randomNum) {
      console.log(`${userChoice} is  too low.`);
    } else {
      console.log(`${userChoice} is  too high.`);
    }

    attempt++;
    play();
  }

  play(); // start inner game loop
}

// Function to ask the user to play again
function askToPlayAgain() {
  const playAgain = prompt(" Do you want to play again? (yes or no)").toLowerCase();
  if (playAgain === "yes") {
    const newRandom = randomNumber(); // generate new number
    guessNumber(newRandom);
  } else {
    console.log(" Thanks for playing!");
  }
}

// Start the first game
const firstRandom = randomNumber();
guessNumber(firstRandom);
