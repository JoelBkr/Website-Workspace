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


//Ab hier alles zum Uhr-Popup

function openPopup() {
    var popup = document.getElementById("ClockPopup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("ClockPopup");
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

//Popup draggable

let isDragging = false;
        let initialX;
        let initialY;
        let offsetX = 0;
        let offsetY = 0;

        function startDragging(event) {
          isDragging = true;

          if (event.type === 'mousedown') {
            initialX = event.clientX - offsetX;
            initialY = event.clientY - offsetY;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDragging);
          } else if (event.type === 'touchstart') {
            initialX = event.touches[0].clientX - offsetX;
            initialY = event.touches[0].clientY - offsetY;

            document.addEventListener('touchmove', drag);
            document.addEventListener('touchend', stopDragging);
          }

          document.body.style.overflow = 'hidden'; // Deaktiviert das Scrollen der Seite
        }

        function drag(event) {
          if (!isDragging) return;

          event.preventDefault();

          if (event.type === 'mousemove') {
            offsetX = event.clientX - initialX;
            offsetY = event.clientY - initialY;
          } else if (event.type === 'touchmove') {
            offsetX = event.touches[0].clientX - initialX;
            offsetY = event.touches[0].clientY - initialY;
          }

          const popup = document.getElementById('ClockPopup');
          popup.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }

        function stopDragging() {
          isDragging = false;

          document.removeEventListener('mousemove', drag);
          document.removeEventListener('mouseup', stopDragging);
          document.removeEventListener('touchmove', drag);
          document.removeEventListener('touchend', stopDragging);

          document.body.style.overflow = ''; // Aktiviert das Scrollen der Seite wieder
        }

        function openPopup() {
          const popup = document.getElementById('ClockPopup');
          popup.style.display = 'block';
        }

//Alles zur Stoppuhr

var startTime;
var elapsedTime = 0;
var stopwatchInterval;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(updateStopwatch, 10);
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    startTime = Date.now();
    updateStopwatch();
    document.getElementById("stopwatchList").innerHTML = "";
}

function recordTime() {
    var currentTime = formatTime(elapsedTime);
    var listItem = document.createElement("li");
    listItem.innerText = currentTime;
    document.getElementById("stopwatchList").appendChild(listItem);
}

function updateStopwatch() {
    var currentTime = Date.now() - startTime;
    elapsedTime = currentTime;
    var formattedTime = formatTime(currentTime);
    document.getElementById("stopwatch").innerText = formattedTime;
}

function formatTime(time) {
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var seconds = Math.floor((time / 1000) % 60);
    var milliseconds = Math.floor(time % 1000);
    return (
        padNumber(minutes) + ":" + padNumber(seconds) + ":" + padNumber(milliseconds, 3)
    );
}

function padNumber(number, length = 2) {
    return number.toString().padStart(length, "0");
}


//Alles zum Timer

var timerInterval;
var hoursInput;
var minutesInput;
var secondsInput;
var remainingTime = 0;
var pausedTime = 0;
var isPaused = false;

function showInputMenu() {
    var timerDisplay = document.getElementById("timer-display");
    var inputMenu = document.getElementById("input-menu");
    var startButton = document.getElementById("start-button");
    var pauseButton = document.getElementById("pause-button");
    var resetButton = document.getElementById("reset-button");

    timerDisplay.style.display = "none";
    inputMenu.style.display = "block";
    startButton.style.display = "none";
    pauseButton.style.display = "none";
    resetButton.style.display = "none";

    hoursInput = document.getElementById("hours-input");
    minutesInput = document.getElementById("minutes-input");
    secondsInput = document.getElementById("seconds-input");

    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";

    hoursInput.focus();
}

function hideInputMenu() {
    var timerDisplay = document.getElementById("timer-display");
    var inputMenu = document.getElementById("input-menu");
    var startButton = document.getElementById("start-button");
    var pauseButton = document.getElementById("pause-button");
    var resetButton = document.getElementById("reset-button");

    timerDisplay.style.display = "block";
    inputMenu.style.display = "none";
    startButton.style.display = "inline-block";
    pauseButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
}


function startTimer() {
    if (!isPaused) {
        var hours = parseInt(hoursInput.value) || 0;
        var minutes = parseInt(minutesInput.value) || 0;
        var seconds = parseInt(secondsInput.value) || 0;

        remainingTime = (hours * 3600 + minutes * 60 + seconds) || remainingTime;
    }

    if (remainingTime <= 0) return;

    hideInputMenu();
    updateTimerDisplay();

    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            playRingtone();
            return;
        }

        remainingTime--;
        updateTimerDisplay();
    }, 1000);

    isPaused = false;
}


function pauseTimer() {
    clearInterval(timerInterval);
    pausedTime = remainingTime;
    isPaused = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = 0;
    pausedTime = 0;
    isPaused = false;
    updateTimerDisplay();
    audio.pause();
}

function updateTimerDisplay() {
    var timerDisplay = document.getElementById("timer-display");
    var hours = Math.floor(remainingTime / 3600);
    var minutes = Math.floor((remainingTime % 3600) / 60);
    var seconds = remainingTime % 60;

    timerDisplay.textContent = formatTimeTimer(hours, minutes, seconds);
}

function formatTimeTimer(hours, minutes, seconds) {
    return (
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds)
    );
}

function checkInput(input, nextFieldId) {
    if (input.value.length === 2) {
        document.getElementById(nextFieldId).focus();
        if (nextFieldId === "hours-input") {
            hoursInput.select();
        } else if (nextFieldId === "minutes-input") {
            minutesInput.select();
        } else if (nextFieldId === "seconds-input") {
            secondsInput.select();
        }
    }
}

function tabToNextField(event, nextFieldId) {
    if (event.key === "Tab" && event.target.value.length === 2) {
        event.preventDefault();
        document.getElementById(nextFieldId).focus();
        if (nextFieldId === "hours-input") {
            hoursInput.select();
        } else if (nextFieldId === "minutes-input") {
            minutesInput.select();
        } else if (nextFieldId === "seconds-input") {
            secondsInput.select();
        }
    }
}

window.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && document.activeElement.tagName !== "BUTTON") {
        if (document.getElementById("input-menu").style.display === "block") {
            startTimer();
        }
    }
});

window.addEventListener("load", function () {
    updateTimerDisplay();
});

window.addEventListener("beforeunload", function () {
    pauseTimer();
});

if (pausedTime > 0) {
    remainingTime = pausedTime;
    pausedTime = 0;
    isPaused = true;
    updateTimerDisplay();
}

var audio = new Audio('data/ringtone.mp3'); // Passe den Pfad zur Klingeltondatei an
  function playRingtone() {
    audio.play();
  }