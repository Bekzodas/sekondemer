window.addEventListener("DOMContentLoaded", function () {
  var timerDisplay = document.getElementById("timer");
  var startButton = document.getElementById("startButton");
  var stopButton = document.getElementById("stopButton");
  var resetButton = document.getElementById("resetButton");

  var startTime;
  var elapsedTime = 0;
  var isRunning = false;
  var timerInterval;

  startButton.addEventListener("click", function () {
    if (!isRunning) {
      startTimer();
    }
  });

  stopButton.addEventListener("click", function () {
    if (isRunning) {
      stopTimer();
    }
  });

  resetButton.addEventListener("click", function () {
    resetTimer();
  });

  function startTimer() {
    startTime = Date.now() - elapsedTime;
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerInterval);
  }

  function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
  }

  function updateTimer() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    var seconds = Math.floor(elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = formatTimeComponent(seconds);
    minutes = formatTimeComponent(minutes);
    hours = formatTimeComponent(hours);

    timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
  }

  function formatTimeComponent(time) {
    return time < 10 ? "0" + time : time;
  }
});
