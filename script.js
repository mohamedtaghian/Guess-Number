'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMassage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMassage('⛔ No Number!');
    //when guess is correct
  } else if (guess === secretNumber) {
    displayMassage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMassage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
