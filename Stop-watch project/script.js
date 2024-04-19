let timer;
let time = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
    document.getElementById("controlBtn").textContent = "Stop";
  } else {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("controlBtn").textContent = "Start";
}

function resetTimer() {
  stopTimer();
  time = 0;
  document.getElementById("display").textContent = "00:00:00";
}

function updateTimer() {
  time++;
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  
  let displayString = 
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;

  document.getElementById("display").textContent = displayString;
}

document.getElementById("controlBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer); 
