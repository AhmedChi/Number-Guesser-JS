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
    winningNo = getRandomNum(min,max), // will be random later
    guessesLeft = 3;

// UI Elements
const gameWrapper = document.querySelector('#game'),
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

// Play again listener
gameWrapper.addEventListener('mousedown', playAgainEvent)

function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function guessEvent(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} & ${max}`, 'red');
  }

  // check if won
  if(guess === winningNo){
    // Game over - WON
    gameOver(true,`${winningNo} is correct!, You Win!`)
    
  } else {
    // Wrong number
    guessesLeft -= 1;
    // Check if guess left
    if(guessesLeft === 0){
      //Game Over - Lot
      gameOver(false, `Game Over... The right answer was ${winningNo}`)
      
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

function playAgainEvent(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
}

function gameOver(won,msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;

  // Change border & Text color
  guessInput.style.borderColor = color;
  // Set Message
  setMessage(msg, color);
  
  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again'

}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}