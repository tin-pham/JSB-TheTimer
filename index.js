class Timer {
  constructor(timeInput, startButton, pauseButton) {
    this.timeInput = timeInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.intervalId = setInterval(this.tick, 1000);
  };

  tick = () => {
    if (this.currentTime <= 0) return;
    this.currentTime = this.currentTime - 1;
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  get currentTime() {
    return parseInt(this.timeInput.value);
  }

  set currentTime(time) {
    this.timeInput.value = time;
  }
}

const timeInput = document.querySelector('.timer-input');
const startButton = document.querySelector('.start-button');
const pauseButton = document.querySelector('.pause-button');
const timer = new Timer(timeInput, startButton, pauseButton);
