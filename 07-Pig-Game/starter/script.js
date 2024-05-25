'use strict';

// Selecting elements
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

let currentScore = 0;

// Rolling dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. 무작위 주사위 굴리기
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. 주사위 표시하기
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. 1로 굴리는 걸 확인하기 참이면 다음 플레이어로
  if (dice !== 1) {
    // 주사위를 현재 점수에 추가
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // 다음 플레이어로
  }
});
