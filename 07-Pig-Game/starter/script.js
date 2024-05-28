'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. 무작위 주사위 굴리기
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. 주사위 표시하기
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. 1로 굴리는 걸 확인하기 참이면 다음 플레이어로
    if (dice !== 1) {
      // 주사위를 현재 점수에 추가
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // 다음 플레이어로
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.현재 점수와 현재 플레이어의 점수를 계산하기
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. if 플레이어의 점수 > = 100 이라면 끝내기
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 아니면 다음 플레이어로
      switchPlayer();
    }
  }
});

// 초기화
btnNew.addEventListener('click', function () {
  // 현재 플레이어가 승리했을 때
  if (scores[activePlayer] >= 10) {

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } 

  // 스코어 초기화
  scores[0] = 0;
  scores[1] = 0;

  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  if (activePlayer === 1) {
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
    
    document.querySelector('.player--0').classList.add('player--active');
  }

  activePlayer = 0;
  
});
