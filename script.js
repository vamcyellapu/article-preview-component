'use strict';
const share = document.querySelector('.share');
const cardShare = document.querySelector('.card__share');
const icon = document.querySelector('.icon');
share.addEventListener('click', () => {
  cardShare.classList.toggle('card__share-hidden');
});
icon.addEventListener('click', () => {
  cardShare.classList.toggle('card__share-hidden');
});
