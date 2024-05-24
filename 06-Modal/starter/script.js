'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(
    'click',
    openModal
    // function () {
    //     console.log('Button clicked');
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    //   }
  );

btnCloseModal.addEventListener(
  'click',
  closeModal
  // function () {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // }
);

overlay.addEventListener(
  'click',
  closeModal
  // function () {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // }
);

// document.addEventListener('keydown', function (e) {
//   //   console.log('A key was pressed');
//   //   console.log(e.key);

//   if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
