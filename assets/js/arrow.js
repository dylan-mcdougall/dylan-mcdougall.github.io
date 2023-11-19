const rightArrow = document.querySelector('.arrow-right');
const leftArrow = document.querySelector('.arrow-left');
const firstCard = document.querySelector('.first');
const secondCard = document.querySelector('.second');

rightArrow.addEventListener('click', function() {
    this.classList.add('hidden');
    leftArrow.classList.remove('hidden');
    firstCard.classList.add('hidden');
    secondCard.classList.remove('hidden');
});

leftArrow.addEventListener('click', function() {
    this.classList.add('hidden');
    rightArrow.classList.remove('hidden');
    firstCard.classList.remove('hidden');
    secondCard.classList.add('hidden');
});
