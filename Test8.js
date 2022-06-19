/*** Solve the game  "Guess a number",find a secret integer between 1 and 1000000 in less than 50 guesses.
Write a function that solves the game and returns the solution by using the function verify which is defined with the 
following specification:

function verify(guess:integer)->integer


returns:
   0 if the guess is the solution,your program won,
  -1 if the solution is smaller than the guessing parameter,
   1 if the solution is bigger than the guessing parameter,
   
Warning:You are not allowed to call verify() more than 50 times or you lose.
***/




//Function verify
function verify(guess) {
let randomNumber=Math.floor(Math.random()*1000000);
if (guess === randomNumber) {
return 0;
}
else if(guess < randomNumber){
return -1;
}
else if(guess>randomNumber){
return 1;
}
}

//Function solveGame
function solveGame(){
const guessCount=1;
if(guessCount>49){
console.log("You have no chance left to make another guess");
}
else{
verify(12);
guessCount++;
}
}
