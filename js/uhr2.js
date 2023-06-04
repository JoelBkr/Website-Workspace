function updateClock() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Monate sind nullbasiert, daher +1
    var year = currentDate.getFullYear();
  
    // Führende Nullen hinzufügen
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
  
    // Uhrzeit und Datum anzeigen
    var timeElement = document.getElementById("time");
    timeElement.textContent = "Uhr: " + hours + ":" + minutes + ":" + seconds;
  
    var dateElement = document.getElementById("date");
    dateElement.textContent = "Kalender " + day + "." + month + "." + year;
  }
  
  setInterval(updateClock, 1000);
  
  function rotateClockHands() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var hourRotation = (hours % 12) * 30 + (minutes / 2); // Jede Stunde entspricht 30 Grad, jede Minute entspricht 0.5 Grad
    var minuteRotation = (minutes * 6) + (seconds / 10); // Jede Minute entspricht 6 Grad, jede Sekunde entspricht 0.1 Grad
    var secondRotation = seconds * 6; // Jede Sekunde entspricht 6 Grad
  
    var hourHand = document.querySelector('.hour-hand');
    var minuteHand = document.querySelector('.minute-hand');
    var secondHand = document.querySelector('.second-hand');
  
    hourHand.style.transform = 'translateX(-50%) rotate(' + hourRotation + 'deg)';
    minuteHand.style.transform = 'translateX(-50%) rotate(' + minuteRotation + 'deg)';
    secondHand.style.transform = 'translateX(-50%) rotate(' + secondRotation + 'deg)';
  }
  
  setInterval(rotateClockHands, 1000); // Aktualisiere die Zeiger alle 1000 Millisekunden (1 Sekunde)
  
  const popup = document.getElementById('popup');
  
  function openPopup() {
    console.log("test erfolgreich");
    popup.style.display = "block";
  }
  
  function closePopup() {
    popup.style.display = "none";
  }
  
  function showTimer() {
    document.getElementById("timerSection").style.display = "block";
    document.getElementById("stopwatchSection").style.display = "none";
    document.getElementById("headingTimer").style.color = "black";
    document.getElementById("headingStopwatch").style.color = "#444444";
    document.getElementById("headingTimer").style.borderBottom = "2px solid blue";
    document.getElementById("headingStopwatch").style.borderBottom = "0";
  }
  
  function showStopwatch() {
    document.getElementById("stopwatchSection").style.display = "block";
    document.getElementById("timerSection").style.display = "none";
    document.getElementById("headingTimer").style.color = "#444444";
    document.getElementById("headingStopwatch").style.color = "black";
    document.getElementById("headingStopwatch").style.borderBottom = "2px solid blue";
    document.getElementById("headingTimer").style.borderBottom = "0";
  }
  
  //Timer
  var interval;
  var totalSeconds;
  var isPaused = false;
  
  function jumpToNext(input, nextInput) {
    if (input.value.length >= input.maxLength) {
      nextInput.focus();
    }
  }
  
  function startTimer() {
    var hoursInput = document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");
    var secondsInput = document.getElementById("seconds");
  
    var hours = hoursInput.value ? parseInt(hoursInput.value) : 0;
    var minutes = minutesInput.value ? parseInt(minutesInput.value) : 0;
    var seconds = secondsInput.value ? parseInt(secondsInput.value) : 0;
  
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
    var display = document.getElementById("timer");
  
    interval = setInterval(function () {
      if (!isPaused) {
        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;
  
        display.textContent = (hours < 10 ? "0" + hours : hours) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds);
  
        if (totalSeconds <= 0) {
          clearInterval(interval);
          playRingtone();
        } else {
          totalSeconds--;
        }
      }
    }, 1000);
  }
  
  function pauseTimer() {
    isPaused = !isPaused;
  }
  
  function resetTimer() {
    clearInterval(interval);
    var display = document.getElementById("timer");
    display.textContent = "00:00:00";
    isPaused = false;
    totalSeconds = 0;
    var hours = document.getElementById("hours");
    hours.value = "";
    var minutes = document.getElementById("minutes");
    minutes.value = "";
    var seconds = document.getElementById("seconds");
    seconds.value = "";
    audio.pause();
  }
  var audio = new Audio('ringtone.mp3'); // Passe den Pfad zur Klingeltondatei an
  function playRingtone() {
    audio.play();
  }
  
  //Stoppuhr
  
  var startTime;
  var elapsedTime = 0;
  var timerInterval;
  
  function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1);
    document.getElementById("startButtonStopwatch").style.display = "none";
    document.getElementById("stopButtonStopwatch").style.display = "inline";
  }
  
  function stopStopwatch() {
    clearInterval(timerInterval);
    document.getElementById("startButtonStopwatch").style.display = "inline";
    document.getElementById("stopButtonStopwatch").style.display = "none";
  }
  
  function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:000";
    document.getElementById("startButtonStopwatch").style.display = "inline";
    document.getElementById("stopButtonStopwatch").style.display = "none";
  }
  
  