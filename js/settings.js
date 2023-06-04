//Alle Checkboxen auf checked setzen
window.addEventListener('load', function () {
  var checkboxes = document.querySelectorAll('.settings input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
  });
});

function settingsVisible() {
  document.getElementById("settings").style.display = "block";
}

function settingsInvisible() {
  document.getElementById("settings").style.display = "none";
}

function toggleVisibility(tool) {
  var checkbox = document.getElementById(tool + "Checkbox");
  var toolElement = document.getElementById(tool);

  if (checkbox.checked) {
    toolElement.style.display = "block";
  } else {
    toolElement.style.display = "none";
  }
}


function toggleSettingVisibility(setting) {
  var divs = document.getElementsByClassName("oneSetting");
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }

  var setting = document.getElementById(setting + "Settings");
  setting.style.display = "block";
}

//Background
window.addEventListener('load', function () {
  // Hintergrundbild aus Local Storage laden, wenn verfügbar
  var bgImage = localStorage.getItem("bgImage");
  if (bgImage) {
    document.querySelector(".container").style.backgroundImage = "url(" + bgImage + ")";
  }
});

function setBackground() {
  var input = document.getElementById("imageInput");
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    document.querySelector(".container").style.backgroundImage = "url(" + e.target.result + ")";
    // Altes Hintergrundbild aus dem Local Storage entfernen
    localStorage.removeItem("bgImage");
    // Neues Hintergrundbild im Local Storage speichern
    localStorage.setItem("bgImage", e.target.result);
  };
  reader.readAsDataURL(file);
}

function resetBackground() {
  // Hintergrund auf Farbverlauf zurücksetzen
  document.querySelector(".container").style.background = "rgb(1, 122, 248)";
  document.querySelector(".container").style.background = "background: linear-gradient(0deg, rgba(1, 122, 248, 1) 0%, rgba(152, 216, 251, 1) 50%, rgba(0, 151, 240, 1) 100%)";
  // Hintergrundbild aus dem Local Storage entfernen
  localStorage.removeItem("bgImage");
}

// Prüfen, ob ein Bild im Local Storage vorhanden ist und es als Hintergrund setzen
var storedImageUrl = localStorage.getItem("bgImage");
if (storedImageUrl) {
    document.querySelector(".container").style.backgroundImage = "url(" + storedImageUrl + ")";
}

// Hinzufügen des Event Listeners für den Datei-Upload
var imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", setBackground);