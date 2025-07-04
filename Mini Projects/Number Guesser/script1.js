console.log(" Guess the Number (1–100) in Minimum Attempts");
const maxAttempt = 10;          

function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}
function guessNumber(randomNum,callback){
    let attempt=1;
    
    function play(){
    
        if(attempt>maxAttempt){
            console.log("You Lost the Game Max attempt exceeded ");
            console.log("The Original Number was  ",randomNum);
            return callback();
        }
        const userChoice = Number(prompt(`Attempt ${attempt}/${maxAttempt}: Guess the number (1-100):`));

        if(isNaN(userChoice)){
            console.log(`${userChoice} is an Invalid Number `)
            attempt++;
            return play();  
        }
        if(userChoice===randomNum){
            console.log(` Congrats! You guessed the number ${userChoice} correctly in ${attempt} attempts.`);
            return callback();
        }
        else if(userChoice>randomNum){
            console.log(`${userChoice} is too high `);
        }
        else if(userChoice<randomNum){
            console.log(`${userChoice} is too low `);
        }
        attempt++;
        play();
        

        
    }
    play();

}

function askToPlayAgain() {
  const playAgain = prompt(" Do you want to play again? (yes or no)").toLowerCase();
  if (playAgain === "yes") {
    const newRandom = randomNumber(); // generate new number
    guessNumber(newRandom,askToPlayAgain);
  } else {
    console.log(" Thanks for playing!");
  }
}

// Start the first game
const firstRandom = randomNumber();
// console.log(firstRandom);
guessNumber(firstRandom,askToPlayAgain);
