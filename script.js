'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newButton = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//starting condition
let scores;
let activePlayer;
let currentScore;
let playing;

function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  dice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

//to switch player
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//rolling dice functionality
rollButton.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;

    //3.check roll.
    if (diceNumber !== 1) {
      //if 2-6, add dice to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if 1, switch to next player
      switchPlayer();
    }
  }
});

//holding score functionality
holdButton.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active-player's main score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100 then finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //3. Switch to next player
    } else {
      switchPlayer();
    }
  }
});

//reset game functionality
newButton.addEventListener('click', init);
