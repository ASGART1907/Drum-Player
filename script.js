window.addEventListener("keypress",(e) => {
const btn = document.querySelector(`.btn[data-key="${e.key}"]`);
const sound = document.querySelector(`audio[data-key="${e.key}"]`);


if(!sound) return;

sound.currentTime = 0;
sound.play();
btn.classList.add("play");

})

function removePlaying(e){
  this.classList.remove("play");
}

const btns = document.querySelectorAll(".btn");
btns.forEach(key => {
  key.addEventListener("transitionend",removePlaying);
});

