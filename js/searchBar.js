function suche() {
  var suchtext = document.getElementById("suchtext").value;
  window.open("https://www.google.com/search?q=" + suchtext, "_blank");
}

function handleEnterSearchBar(event) {
  if (event.keyCode === 13 && document.getElementById('suchtext') === document.activeElement) {
    event.preventDefault(); // Verhindert, dass die Enter-Taste eine neue Zeile in der Textarea erzeugt
    suche();
  }
}
