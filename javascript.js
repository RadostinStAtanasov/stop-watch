window.onload = function () {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let tens = 0;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendsMinutes = document.getElementById("minutes");
  let appendsHours = document.getElementById("hours");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendsMinutes.innerHTML = minutes;
    appendsHours.innerHTML = hours;
  };

  function startTimer() {  
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds == 60 & tens == 0) {
        minutes++;
        console.log("minutes -> " + minutes);
        appendsMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
        appendsMinutes.innerHTML = minutes;
    }

    if (minutes == 60 & seconds == 0) {
        hours++;
        appendsHours.innerHTML = "0" + hours;
        minutes = 0;
        appendsMinutes.innerHTML = "0" + 0;

    }

    if (hours > 9) {
      appendsHours.innerHTML = hours;
    }
  }
};
