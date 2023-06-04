document.addEventListener("DOMContentLoaded", function () {
  setDropdownValue();
});

function setDropdownValue() {
  document.getElementById("datum-rechner").style.display = "0";
  document.getElementById("zeit-rechner").style.display = "none";
  document.getElementById("datumzeit-rechner").style.display = "none";

  var select1 = document.getElementById("select1");
  select1.value = "choose";

  setPlaceholder();
}

// Beim Klicken auf den Button wird zum Anfang der Seite gescrollt
function scrollUp() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}

