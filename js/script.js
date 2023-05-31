document.addEventListener("DOMContentLoaded", function () {
  setDropdownValue();
});

function setDropdownValue() {
  document.getElementById("rechner").selectedIndex = "0";
  document.getElementById("datum-rechner").style.display = "none";
  document.getElementById("zeit-rechner").style.display = "none";
  document.getElementById("datumzeit-rechner").style.display = "none";

  var select1 = document.getElementById("select1");
  select1.value = "choose";

  setPlaceholder();
}


