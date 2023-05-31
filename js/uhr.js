// Beim Klicken auf den Button wird zum Anfang der Seite gescrollt
function scrollUp() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}

function drawClock() {
  var canvas = document.getElementById("uhrCanvas");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.9;
  setInterval(drawTime, 1000);

  function drawTime() {
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTicks(ctx, radius);
    drawTimeHands(ctx, radius);
  }

  function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = radius * 0.1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }

  function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num <= 12; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  function drawTicks(ctx, radius) {
    var ang;
    ctx.lineWidth = radius * 0.01;
    ctx.strokeStyle = "black";
    for (var i = 0; i < 60; i++) {
      ang = i * Math.PI / 30;
      ctx.beginPath();
      ctx.moveTo(radius * 0.92 * Math.sin(ang), -radius * 0.92 * Math.cos(ang));
      ctx.lineTo(radius * 0.96 * Math.sin(ang), -radius * 0.96 * Math.cos(ang));
      ctx.stroke();
    }
  }

  function drawTimeHands(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // Stunde
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    // Minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // Sekunde
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02, "red");
  }

  function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    if (color) {
      ctx.strokeStyle = color;
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.stroke();
    ctx.rotate(-pos);
  }
}

// Start der Uhr
drawClock();

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

// Die Uhr aktualisieren alle 1 Sekunde
setInterval(updateClock, 1000);





// Uhr Popup mit Timer und Stoppuhr
var popup = document.getElementById("popup");
var header = document.getElementById("header");
var openButton = document.getElementById("openButton");
var isDragging = false;
var mouseOffsetX = 0;
var mouseOffsetY = 0;

openButton.addEventListener("click", openPopup);
header.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", dragPopup);
document.addEventListener("mouseup", stopDragging);

function openPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

function startDragging(event) {
  isDragging = true;
  mouseOffsetX = event.clientX - popup.offsetLeft;
  mouseOffsetY = event.clientY - popup.offsetTop;
}

function dragPopup(event) {
  if (isDragging) {
    event.preventDefault();
    var posX = event.clientX - mouseOffsetX;
    var posY = event.clientY - mouseOffsetY;
    popup.style.left = posX + "px";
    popup.style.top = posY + "px";
  }
}

function stopDragging() {
  isDragging = false;
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

function updateTime() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var minutes = Math.floor(elapsedTime / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);
  var milliseconds = elapsedTime % 1000;
  milliseconds = milliseconds.toString().padStart(3, "0");
  seconds = seconds.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  document.getElementById("display").textContent =
    minutes + ":" + seconds + ":" + milliseconds;
}

