const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

const jump = () => {
  if (dino.classList !== 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(() => {
    dino.classList.remove('jump');
  }, 400);
}

const checkAlive = () => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('GAME OVER!!!');
  }
}

document.addEventListener('keydown', jump);

let isAlive = setInterval(checkAlive, 10);

