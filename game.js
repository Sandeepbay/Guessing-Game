// Code for the Guessing game

let MaxNum = parseInt(prompt("Hello, Enter the maximum number"));

let Target = Math.floor(Math.random() * MaxNum) + 1;

let guess = parseInt(prompt("Enter your first Guess"));
let attempts = 1;

while(parseInt(guess) !== Target) {
    if(guess === 'q')  break;
    attempts=attempts+1;
    if(guess > Target) {
        guess = (prompt("Too high, Try Lower"));
    }
    else {
        guess = (prompt("Too low, Try going higher"));
    }
}
if(guess === 'q')
console.log("The game was Quit");
else
console.log(`You have done it in ${attempts} Attempts`);

