export default class Timer {
  constructor(timeInput, startButton, pauseButton, callbacks) {
    this.timeInput = timeInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

    if (callbacks) {
      const { onStart, onTick, onPause } = callbacks;
      this.onStart = onStart;
      this.onTick = onTick;
      this.onPause = onPause;
    }
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.currentTime);
    }
    this.intervalId = setInterval(this.tick, 50);
  };

  tick = () => {
    if (this.currentTime <= 0) return;
    this.currentTime = (this.currentTime - 0.05).toFixed(2);

    if (this.onTick) {
      this.onTick(this.currentTime);
    }
  };

  pause = () => {
    clearInterval(this.intervalId);
    if (this.onPause) {
      this.onPause();
    }
  };

  get currentTime() {
    return parseFloat(this.timeInput.value);
  }

  set currentTime(time) {
    this.timeInput.value = time;
  }
}
