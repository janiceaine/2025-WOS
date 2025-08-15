/* 
Challenge: 
    Create a text-based game that runs in the terminal and uses readline.
Game functionality:
    1. When game starts, terminal shows:
        Game welcome/title
        A prompt for user to enter their choice
    2. Rules:
        Rock beats Scissors
        Paper beats Rock
        Scissors beats Paper
        Matching pairs tie
        Unknown entries stop the game
    3. When a user enters their choice:
        A randomly generated option will be chosen to go against the user's choice
            Hint: One way is to Use Math.round() and Math.random() on an array of options
        The choices will be compared
        The winner will be announced
*/

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function ask() {
  const name = await rl.question("Choose your fighter: ");
  // Figure out what user entered and if it matches game choice

  if (choice.toLowerCase != "rock" && choice.toLowerCase != "paper" && choice.toLowerCase != "scissors") {
    console.log('Sorry, I have no idea what that is');
    
  } else {
    let options = ["rock", "paper", "scissors"];
    let op = options[Math.floor(Math.random()*3)];

    // Rock beats Scissors
    // Paper beats Rock
    // Scissors beats Paper
    // Matching pairs tie

    if (choice == "rock" && op == "scissors" || choice == "paper" && op == "rock" || choice == "scissors" && op == "paper") {
        console.log(`${choice.toUpperCase()} VERSUS ${op.toUpperCase()}`);
        console.log('You win!');       
    } else if ( choice == op) {
        console.log("It's a tie! Try again!");
    } else {
        console.log('You lost! Whomp Whoomp!');
        
    }

    console.log('RANDOM ' + Math.random());
    console.log('RANDOM TIMES 3' + Math.random()*3);
    console.log('Yay' + Math.floor(Math.random()*3));
    
  }

  rl.close();
} 

console.log('Welcome to Rock, Paper, Scissors!');
console.log("/ / / / / / / / / / / / / / / / / ");


ask();

