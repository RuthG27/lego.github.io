const modal = document.querySelector('.modal');
const buttonSpidey = document.querySelector('#button-spidey');
const buttonBatman = document.querySelector('#button-batman');
const buttonRobin = document.querySelector('#button-robin');
const closeButton = document.querySelector('.modal__content--close');
buttonBatman.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});
buttonRobin.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});
buttonSpidey.addEventListener('click', () => {
  // 1ra Forma
  // modal.className = 'modal visible';
  //2da Forma
  // modal.style.display = 'grid';

  modal.classList.remove('hidden');
  modal.classList.add('visible');
});
closeButton.addEventListener('click', () => {
  // modal.style.display = 'none';

  modal.classList.remove('visible');
  modal.classList.add('hidden');
});
