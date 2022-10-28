//declaring the secret number
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);

//score
let score = 20 ;
let highScore = 0;

//onclick of check button
document.querySelector('.check').addEventListener('click', function () 
{
  //storing guess value in a constant
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);


  //if no number is entered in input field
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 no number!';
  }


  //if guess is correct
  else if (SecretNumber === guess) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = SecretNumber;
    //changing CSS when guess is corect
    //style.cssProperty in camel case = 'value in string'
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //setting highScore
    if(score>highScore){
       highScore = score;
       document.querySelector('.highscore').textContent = highScore;
  }
}


  //if guess> Secretnumber
  else if (guess > SecretNumber && score != 0) {
    document.querySelector('.message').textContent = 'Guess is too high';
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
  //if guess < Secretnumber
  else if (guess < SecretNumber && score != 0) {
    document.querySelector('.message').textContent = 'Guess is too low';
    score--;
    document.querySelector('.score').textContent = score;

    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  //input value
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;

  //restoring css styles
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
