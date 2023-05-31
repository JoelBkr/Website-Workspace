function settingsVisibe() {
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

  //Background

  window.addEventListener('load', function () {
    // Hintergrundbild aus Local Storage laden, wenn verfügbar
    var bgImage = localStorage.getItem("bgImage");
    if (bgImage) {
      document.querySelector(".container").style.backgroundImage = "url(" + bgImage + ")";
    }
  });
  
  function setBackground() {
    var input = document.getElementById("bgImageInput");
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
    // Hintergrund auf das Bild "pictures/Background.png" zurücksetzen
    document.querySelector(".container").style.backgroundImage = "url(pictures/Background.png)";
    // Hintergrundbild aus dem Local Storage entfernen
    localStorage.removeItem("bgImage");
  }
  
  function uploadImage() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function (event) {
      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result;
        localStorage.setItem("bgImage", dataURL); // Hintergrundbild im Local Storage speichern
        document.querySelector(".container").style.backgroundImage = "url(" + dataURL + ")";
      };
      reader.readAsDataURL(event.target.files[0]);
    };
    input.click();
  }
  
  function checkFileUpload() {
    var fileInput = document.getElementById('bgImageInput'); // ID des File-Input-Elements
  
    if (fileInput.files.length > 0) {
      setBackground();
  
    }
  }
  
  var fileInput = document.getElementById('bgImageInput'); // ID des File-Input-Elements
  fileInput.addEventListener('change', checkFileUpload);