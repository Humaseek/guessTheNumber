'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score = document.querySelector('.score');
let message = document.querySelector('.message');
console.log(message.textContent);
let highScore = document.querySelector('.highscore');
let guess;
const play = function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(message.textContent);

  if (
    !guess &&
    score.textContent > 0 &&
    message.textContent != 'Correct guess 🎉🍾'
  ) {
    message.textContent = 'No number 🔴';
  } else if (guess === secretNumber && message.textContent != 'Game Over') {
    message.textContent = 'Correct guess 🎉🍾';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guess;
    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }
  } else if (guess != secretNumber && score.textContent > 0) {
    if (score.textContent < 2 && message.textContent != 'Correct guess 🎉🍾') {
      message.textContent = 'Game Over';
      score.textContent--;
      document.querySelector('body').style.backgroundColor = '#e32c2c';
      document.querySelector('.number').textContent = secretNumber;
    } else if (score.textContent > 1) {
      if (guess > secretNumber && message.textContent != 'Correct guess 🎉🍾') {
        message.textContent = `${guess} is higher than the number 📈`;
        score.textContent--;
      } else if (
        guess < secretNumber &&
        message.textContent != 'Correct guess 🎉🍾'
      ) {
        message.textContent = `${guess} is lower than the number 📉`;
        score.textContent--;
      }
    }
  }
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', play);

document.querySelector('.again').addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  score.textContent = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    play();
  }
});
