window.onload = function () {
  let minutes = 99;
  let seconds = 59;
  let tens = 0;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendsMinutes = document.getElementById("minutes");
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
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendsMinutes.innerHTML = minutes;
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
      //console.log("seconds -> " + seconds);
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
        appendSeconds.innerHTML = "0" + 0;
        seconds = 0;
        
        appendsMinutes.innerHTML = "0" + minutes;
    }

    if (minutes > 9) {
       appendsMinutes.innerHTML = minutes;
    }
  }
};
