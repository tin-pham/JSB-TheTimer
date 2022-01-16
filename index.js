import Timer from './Timer.js';
const timeInput = document.querySelector('.timer-input');
const startButton = document.querySelector('.start-button');
const pauseButton = document.querySelector('.pause-button');

const timerSvg = document.querySelector('.timer-svg');
const circle = timerSvg.querySelector('circle');

let duration;
const radius = circle.getAttribute('r');
const perimeter = 2 * Math.PI * radius;
const timer = new Timer(timeInput, startButton, pauseButton, {
  onStart(totalTime) {
    duration = totalTime;
    console.log('Start the timer');
  },

  onTick(currentTime) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * currentTime) / duration - perimeter
    );
  },

  onPause() {
    console.log('Paused the timer');
  },
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
