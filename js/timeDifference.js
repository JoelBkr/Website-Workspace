var datumRechner = document.getElementById("datum-rechner");
var zeitRechner = document.getElementById("zeit-rechner");
var datumzeitRechner = document.getElementById("datumzeit-rechner");

function zeigeRechner() {
  var rechnerAuswahl = document.getElementById("rechner").value;
  
  if (rechnerAuswahl === "datum") {
    datumRechner.style.display = "block";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
  } else if (rechnerAuswahl === "zeit") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "block";
    datumzeitRechner.style.display = "none";
  } else if (rechnerAuswahl === "datumzeit") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "block";
  }
}

function berechneDatumDifferenz() {
  var startdatum = new Date(document.getElementById("startdatum").value);
  var enddatum = new Date(document.getElementById("enddatum").value);

  var differenzInMillisekunden = enddatum.getTime() - startdatum.getTime();
  var differenzInTagen = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24));

  document.getElementById("datum-ergebnis").innerHTML = "Die Differenz zwischen " + startdatum.toDateString() + " und " + enddatum.toDateString() + " beträgt " + differenzInTagen + " Tage.";
}

function berechneZeitdifferenz() {
  var startzeit = new Date("2000-01-01T" + document.getElementById("startzeit").value);
  var endzeit = new Date("2000-01-01T" + document.getElementById("endzeit").value);

  var differenzInMillisekunden = endzeit.getTime() - startzeit.getTime();
  var differenzInStunden = Math.floor(differenzInMillisekunden / (1000 * 60 * 60));
  var differenzInMinuten = Math.floor((differenzInMillisekunden % (1000 * 60 * 60)) / (1000 * 60));
  var differenzInSekunden = Math.floor((differenzInMillisekunden % (1000 * 60)) / 1000);

  document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz zwischen " + startzeit.toLocaleTimeString() + " und " + endzeit.toLocaleTimeString() + " beträgt " + differenzInStunden + " Stunden, " + differenzInMinuten + " Minuten und " + differenzInSekunden + " Sekunden.";
}

function berechneDatumUndZeitdifferenz() {
  var startdatumzeit = new Date(document.getElementById("startdatumzeit").value);
  var enddatumzeit = new Date(document.getElementById("enddatumzeit").value);

  var differenzInMillisekunden = enddatumzeit.getTime() - startdatumzeit.getTime();
  var differenzInTagen = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24));
  var differenzInStunden = Math.floor((differenzInMillisekunden % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var differenzInMinuten = Math.floor((differenzInMillisekunden % (1000 * 60 * 60)) / (1000 * 60));
  var differenzInSekunden = Math.floor((differenzInMillisekunden % (1000 * 60)) / 1000);

  document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz zwischen " + startdatumzeit.toLocaleString() + " und " + enddatumzeit.toLocaleString() + " beträgt " + differenzInTagen + " Tage, " + differenzInStunden + " Stunden, " + differenzInMinuten + " Minuten und " + differenzInSekunden + " Sekunden.";
}

