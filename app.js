/*
GAME RULES
- players must guess a number between a min and max numer
- player gets a certain number of guesses
- notify player of guesses remaining
- notify rhe player of the correct answer if loses
- lets player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNo = 2, // will be random later
    guessesLeft = 3;

// UI Elements
const gameUI = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max (Now dynamic - No static HTML)
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', guessEvent);

// Create Guess Event
function guessEvent(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} & ${max}`, 'red');
  }

  // check if won
  if(guess === winningNo){
    // Disable input
    guessInput.disabled = true;
    guessBtn.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set Message
    setMessage(`${winningNo} is correct!, You Win`, 'green');
  } else {
    // Wrong number
    guessesLeft -= 1;
    // Check if guess left
    if(guessesLeft === 0){
      //Game Over
      // Disable input
      guessInput.disabled = true;
      guessBtn.disabled = true;
      // Change border color
      guessInput.style.borderColor = 'red';
      // Set Message
      setMessage(`Game Over... The right answer was ${winningNo}`, 'red');

    } else {
      // Game continues
      // Change borde color
      guessInput.style.borderColor = 'orange'
      
      // Clear Input
      guessInput.value = '';
      
      // Set Message
      setMessage(`Try again... ${guessInput.value} is wrong!, You have ${guessesLeft} guess left`, 'orange');
      
    }

  }
}

function gameOver(won,msg){
  
}


// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}