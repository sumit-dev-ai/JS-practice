console.log("Welcome to Rock Paper Scissors Game");

function RockPaperScissor() {
    const userChoice = prompt("Choose rock 🪨, paper 📄, or scissors ✂️:").toLowerCase().trim();
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    }
    else{
        computerChoice="scissors";
    }
    const emojis = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};
    console.log("-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+")      
    console.log("You Choose ",emojis[userChoice]);
    console.log("Computer Choose ",emojis[computerChoice]);
    console.log("-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+")      
    if (
        (userChoice === "rock" && computerChoice==="scissors") ||
        (userChoice === "paper" && computerChoice==="rock") ||
        (userChoice === "scissors" && computerChoice==="paper")

    ) {
        console.log("You Won This Round...Congrats!") 
    }
    else if (
        (userChoice === "rock" && computerChoice==="paper") ||
        (userChoice === "paper" && computerChoice==="scissors") ||
        (userChoice === "scissors" && computerChoice==="rock")

    ) {
        console.log("Awww You Lost..Better Luck Next Time"); 
    }
    else if(userChoice===computerChoice){
        console.log("Oh Its a Tie");
    }
    else{
        console.log("Maybe There was a spelling Mistake :( ");
    }

    const playAgain=prompt("Do you want to play again (yes/no)");
    const decision = playAgain ? playAgain.toLowerCase() : "no";
    if(decision==="yes"){
        RockPaperScissor();
    }
    else{
        console.log("It was Fun To Play with You...Hope to see you again later");
    }

}
RockPaperScissor();