
/**
 * Create css bubble
 * @param {Event} e 
 */
const createBubble = (e) => {
  
  const color = document.querySelector(`div[data-code="${e.keyCode}"]`).getAttribute('data-color');
  const visual = document.querySelector('.visual');
  const bubble = document.createElement('div');
  visual.appendChild(bubble);
  bubble.style.backgroundColor = color;
  
  bubble.style.animation = "jump 1s ease";
  bubble.addEventListener('animationend', function() {
    visual.removeChild(this);
  });

};


/**
 * Make sound after hit keyboard
 * @param {Event} e 
 */
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-code="${e.keyCode}"]`);
  const pads = document.querySelectorAll('.pads div');
  const pad = document.querySelector(`div[data-code="${e.keyCode}"]`);
 

  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  pad.classList.add('play-sound');

  pads.forEach(() => {
    createBubble(e);
  });
}















//
// LISTENERS
//

window.addEventListener('keydown', playSound, false);