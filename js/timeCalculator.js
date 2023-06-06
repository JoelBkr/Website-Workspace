var datumRechner = document.getElementById("datum-rechner");
var zeitRechner = document.getElementById("zeit-rechner");
var datumzeitRechner = document.getElementById("datumzeit-rechner");

function zeigeRechnerart() {
  var rechnerArt = document.getElementById("rechnerArt").value;
  var rechnerAuswahl = document.getElementById("rechner");

  if (rechnerArt === "Differenz") {
    rechnerAuswahl.innerHTML = '<option value="datum" selected>Datum</option><option value="zeit">Zeit</option><option value="datumzeit">Datum und Zeit</option>';
  } else if (rechnerArt === "Addition") {
    rechnerAuswahl.innerHTML = '<option value="datumAddieren">Datum</option><option value="ZeitAddieren">Zeit</option><option value="datumZeitAddieren">Datum und Zeit</option>';
  } else if (rechnerArt === "Subtraktion") {
    rechnerAuswahl.innerHTML = '<option value="datumSubtrahieren">Datum</option><option value="zeitSubtrahieren">Zeit</option><option value="datumZeitSubtrahieren">Datum und Zeit</option>';
  }
}

function zeigeRechner() {
  var rechnerAuswahl = document.getElementById("rechner").value;

  var datumRechner = document.getElementById("datum-rechner");
  var zeitRechner = document.getElementById("zeit-rechner");
  var datumzeitRechner = document.getElementById("datumzeit-rechner");
  var datumAddieren = document.getElementById("datumAddieren");
  var zeitAddieren = document.getElementById("ZeitAddieren");
  var datumZeitAddieren = document.getElementById("datumZeitAddieren");
  var datumSubtrahieren = document.getElementById("datumSubtrahieren");
  var zeitSubtrahieren = document.getElementById("zeitSubtrahieren");
  var datumZeitSubtrahieren = document.getElementById("datumZeitSubtrahieren");
  var ergebnisIn = document.getElementById("ergebnisIn");

  if (rechnerAuswahl === "datum") {
    datumRechner.style.display = "block";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
  } else if (rechnerAuswahl === "zeit") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "block";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
  } else if (rechnerAuswahl === "datumzeit") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "block";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
  } else if (rechnerAuswahl === "datumAddieren") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "block";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
    ergebnisIn.style.display = "none";
  }
  else if (rechnerAuswahl === "ZeitAddieren") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "block";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
    ergebnisIn.style.display = "none";
  }
  else if (rechnerAuswahl === "datumZeitAddieren") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "block";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
    ergebnisIn.style.display = "none";
  }
  else if (rechnerAuswahl === "datumSubtrahieren") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "block";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "none";
    ergebnisIn.style.display = "none";
  }
  else if (rechnerAuswahl === "zeitSubtrahieren") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "block";
    datumZeitSubtrahieren.style.display = "none";
    ergebnisIn.style.display = "none";
  }
  else if (rechnerAuswahl === "datumZeitSubtrahieren") {
    datumRechner.style.display = "none";
    zeitRechner.style.display = "none";
    datumzeitRechner.style.display = "none";
    datumAddieren.style.display = "none";
    zeitAddieren.style.display = "none";
    datumZeitAddieren.style.display = "none";
    datumSubtrahieren.style.display = "none";
    zeitSubtrahieren.style.display = "none";
    datumZeitSubtrahieren.style.display = "block";
    ergebnisIn.style.display = "none";
  }
}

function entscheideWelcherRechner() {
  var rechnerAuswahl = document.getElementById("rechner").value;

  if (rechnerAuswahl === "datum") {
    berechneDatumDifferenz();
  } else if (rechnerAuswahl === "zeit") {
    berechneZeitdifferenz();
  } else if (rechnerAuswahl === "datumzeit") {
    berechneDatumUndZeitdifferenz();
  }
}

function berechneDatumDifferenz() {
  var startdatum = new Date(document.getElementById("startdatum").value);
  var enddatum = new Date(document.getElementById("enddatum").value);

  var differenzInMillisekunden = enddatum.getTime() - startdatum.getTime();
  var differenzInMinuten = Math.floor(differenzInMillisekunden / (1000 * 60));
  var differenzInStunden = Math.floor(differenzInMillisekunden / (1000 * 60 * 60));
  var differenzInTagen = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24));
  var differenzInWochen = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24 * 7));
  var differenzInMonaten = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24 * 30));
  var differenzInJahren = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24 * 365));

  var timeFormat = document.getElementById("timeFormat").value;

  if (timeFormat === "minutes") {
    var restlicheMinuten = differenzInMinuten % 60;
    document.getElementById("datum-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInMinuten + " Minuten.";
  } else if (timeFormat === "hours") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    document.getElementById("datum-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "days") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 365;
    document.getElementById("datum-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInTagen + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "weeks") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 7;
    document.getElementById("datum-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInWochen + " Wochen und " + restlicheTage + " Tage.";
  } else if (timeFormat === "months") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 30;
    document.getElementById("datum-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInMonaten + " Monate und " + restlicheTage + " Tage.";
  } else if (timeFormat === "years") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 365;
    document.getElementById("datum-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInJahren + " Jahre und " + restlicheTage + " Tage.";
  }
}

function berechneZeitdifferenz() {
  var startzeit = document.getElementById("startzeit").value.split(":");
  var endzeit = document.getElementById("endzeit").value.split(":");

  var startStunden = parseInt(startzeit[0]);
  var startMinuten = parseInt(startzeit[1]);

  var endStunden = parseInt(endzeit[0]);
  var endMinuten = parseInt(endzeit[1]);

  var differenzInMinuten = (endStunden * 60 + endMinuten) - (startStunden * 60 + startMinuten);
  var differenzInStunden = Math.floor(differenzInMinuten / 60);
  var differenzInTagen = Math.floor(differenzInMinuten / (60 * 24));
  var differenzInWochen = Math.floor(differenzInMinuten / (60 * 24 * 7));
  var differenzInMonaten = Math.floor(differenzInMinuten / (60 * 24 * 30));
  var differenzInJahren = Math.floor(differenzInMinuten / (60 * 24 * 365));

  var timeFormat = document.getElementById("timeFormat").value;

  if (timeFormat === "minutes") {
    var restlicheMinuten = differenzInMinuten % 60;
    document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInMinuten + " Minuten.";
  } else if (timeFormat === "hours") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "days") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 365;
    document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInTagen + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "weeks") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 7;
    document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInWochen + " Wochen, " + restlicheTage + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "months") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 30;
    document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInMonaten + " Monate, " + restlicheTage + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "years") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheMonate = differenzInMonaten % 12;
    var restlicheTage = differenzInTagen % 365;
    document.getElementById("zeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInJahren + " Jahre " + restlicheMonate + " Monate, " + restlicheTage + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  }
}

function berechneDatumUndZeitdifferenz() {
  var startdatumzeit = new Date(document.getElementById("startdatumzeit").value);
  var enddatumzeit = new Date(document.getElementById("enddatumzeit").value);

  var differenzInMillisekunden = enddatumzeit.getTime() - startdatumzeit.getTime();
  var differenzInMinuten = Math.floor(differenzInMillisekunden / (1000 * 60));
  var differenzInStunden = Math.floor(differenzInMillisekunden / (1000 * 60 * 60));
  var differenzInTagen = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24));
  var differenzInWochen = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24 * 7));
  var differenzInMonaten = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24 * 30));
  var differenzInJahren = Math.floor(differenzInMillisekunden / (1000 * 60 * 60 * 24 * 365));

  var timeFormat = document.getElementById("timeFormat").value;

  if (timeFormat === "minutes") {
    var restlicheMinuten = differenzInMinuten % 60;
    document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInMinuten + " Minuten.";
  } else if (timeFormat === "hours") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "days") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 365;
    document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInTagen + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "weeks") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 7;
    document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInWochen + " Wochen, " + restlicheTage + " Tage " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "months") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 30;
    document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInMonaten + " Monate, " + restlicheTage + " Tage " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  } else if (timeFormat === "years") {
    var restlicheMinuten = differenzInMinuten % 60;
    var restlicheStunden = differenzInStunden % 24;
    var restlicheTage = differenzInTagen % 365;
    document.getElementById("datumzeit-ergebnis").innerHTML = "Die Differenz beträgt " + differenzInJahren + " Jahre, " + restlicheTage + " Tage, " + restlicheStunden + " Stunden und " + restlicheMinuten + " Minuten.";
  }
}

//Addieren und Subtrahieren Date
function addierenDate() {
  var datumEingabe = document.getElementById("datum1").value;
  var zahlEingabe = parseInt(document.getElementById("zahl1Date").value);
  var formatAuswahl = document.getElementById("format1Date").value;

  var datumTeile = datumEingabe.split("-");
  var jahr = parseInt(datumTeile[0]);
  var monat = parseInt(datumTeile[1]);
  var tag = parseInt(datumTeile[2]);

  if (formatAuswahl === "Jahre") {
    jahr += zahlEingabe;
  } else if (formatAuswahl === "Monate") {
    monat += zahlEingabe;
  } else if (formatAuswahl === "Wochen") {
    tag += zahlEingabe * 7;
  } else if (formatAuswahl === "Tage") {
    tag += zahlEingabe;
  }

  var datum = new Date(jahr, monat - 1, tag);
  var ergebnis = datum.getDate().toString().padStart(2, "0") + "." +
    (datum.getMonth() + 1).toString().padStart(2, "0") + "." +
    datum.getFullYear();

  document.getElementById("ergebnisDateAdd").innerHTML = ergebnis;
}

function subtrahierenDate() {
  var datumEingabe = document.getElementById("datum2").value;
  var zahlEingabe = parseInt(document.getElementById("zahl2Date").value);
  var formatAuswahl = document.getElementById("format2DateSub").value;

  var datumTeile = datumEingabe.split("-");
  var jahr = parseInt(datumTeile[0]);
  var monat = parseInt(datumTeile[1]);
  var tag = parseInt(datumTeile[2]);

  if (formatAuswahl === "Jahre") {
    jahr -= zahlEingabe;
  } else if (formatAuswahl === "Monate") {
    monat -= zahlEingabe;
  } else if (formatAuswahl === "Wochen") {
    tag -= zahlEingabe * 7;
  } else if (formatAuswahl === "Tage") {
    tag -= zahlEingabe;
  }

  var datum = new Date(jahr, monat - 1, tag);
  var ergebnis = datum.getDate().toString().padStart(2, "0") + "." +
    (datum.getMonth() + 1).toString().padStart(2, "0") + "." +
    datum.getFullYear();

  document.getElementById("ergebnisDateSub").innerHTML = ergebnis;
}

//Time Subtraktion und Addition
function addierenTime() {
  var zeitEingabe = document.getElementById("zeit1").value;
  var zahlEingabe = parseInt(document.getElementById("zahl1Time").value);
  var formatAuswahl = document.getElementById("format1Time").value;

  var zeitTeile = zeitEingabe.split(":");
  var stunden = parseInt(zeitTeile[0]);
  var minuten = parseInt(zeitTeile[1]);
  var sekunden = parseInt(zeitTeile[2] || 0);

  if (formatAuswahl === "Sekunden") {
    sekunden += zahlEingabe;
  } else if (formatAuswahl === "Minuten") {
    minuten += zahlEingabe;
  } else if (formatAuswahl === "Stunden") {
    stunden += zahlEingabe;
  }

  if (sekunden >= 60) {
    minuten += Math.floor(sekunden / 60);
    sekunden = sekunden % 60;
  }
  if (minuten >= 60) {
    stunden += Math.floor(minuten / 60);
    minuten = minuten % 60;
  }
  if (stunden >= 24) {
    stunden = stunden % 24;
  }

  var ergebnis = stunden.toString().padStart(2, "0") + ":" +
    minuten.toString().padStart(2, "0") + ":" +
    sekunden.toString().padStart(2, "0");

  document.getElementById("ergebnisTimeAdd").innerHTML = ergebnis;
}

function subtrahierenTime() {
  var zeitEingabe = document.getElementById("zeit2").value;
  var zahlEingabe = parseInt(document.getElementById("zahl2Time").value);
  var formatAuswahl = document.getElementById("format2TimeSub").value;

  var zeitTeile = zeitEingabe.split(":");
  var stunden = parseInt(zeitTeile[0]);
  var minuten = parseInt(zeitTeile[1]);
  var sekunden = parseInt(zeitTeile[2] || 0);

  if (formatAuswahl === "Sekunden") {
    sekunden -= zahlEingabe;
  } else if (formatAuswahl === "Minuten") {
    minuten -= zahlEingabe;
  } else if (formatAuswahl === "Stunden") {
    stunden -= zahlEingabe;
  }

  if (sekunden < 0) {
    minuten -= Math.ceil(Math.abs(sekunden) / 60);
    sekunden = 60 - Math.abs(sekunden) % 60;
  }
  if (minuten < 0) {
    stunden -= Math.ceil(Math.abs(minuten) / 60);
    minuten = 60 - Math.abs(minuten) % 60;
  }
  if (stunden < 0) {
    stunden = 24 - Math.abs(stunden) % 24;
  }

  var ergebnis = stunden.toString().padStart(2, "0") + ":" +
    minuten.toString().padStart(2, "0") + ":" +
    sekunden.toString().padStart(2, "0");

  document.getElementById("ergebnisTimeSub").innerHTML = ergebnis;
}

//Addieren Subtrahieren für beides
function addieren() {
  var datumEingabe = document.getElementById("datum").value;
  var uhrzeitEingabe = document.getElementById("uhrzeit").value;
  var zahlEingabe = parseInt(document.getElementById("zahl").value);
  var formatAuswahl = document.getElementById("format").value;

  var datumTeile = datumEingabe.split("-");
  var jahr = parseInt(datumTeile[0]);
  var monat = parseInt(datumTeile[1]);
  var tag = parseInt(datumTeile[2]);

  var uhrzeitTeile = uhrzeitEingabe.split(":");
  var stunden = parseInt(uhrzeitTeile[0]);
  var minuten = parseInt(uhrzeitTeile[1]);

  if (formatAuswahl === "Jahre") {
    jahr += zahlEingabe;
  } else if (formatAuswahl === "Monate") {
    monat += zahlEingabe;
  } else if (formatAuswahl === "Wochen") {
    tag += zahlEingabe * 7;
  } else if (formatAuswahl === "Tage") {
    tag += zahlEingabe;
  } else if (formatAuswahl === "Stunden") {
    stunden += zahlEingabe;
  } else if (formatAuswahl === "Minuten") {
    minuten += zahlEingabe;
  }

  var datum = new Date(jahr, monat - 1, tag, stunden, minuten);
  var ergebnisDatum = datum.getDate().toString().padStart(2, "0") + "." +
    (datum.getMonth() + 1).toString().padStart(2, "0") + "." +
    datum.getFullYear();
  var ergebnisUhrzeit = datum.getHours().toString().padStart(2, "0") + ":" +
    datum.getMinutes().toString().padStart(2, "0");

  document.getElementById("ergebnis1").innerHTML = ergebnisDatum + " " + ergebnisUhrzeit;
}

function subtrahieren() {
  var datumEingabe = document.getElementById("datum2Beide").value;
  var uhrzeitEingabe = document.getElementById("uhrzeit2Beide").value;
  var zahlEingabe = parseInt(document.getElementById("zahl2Beide").value);
  var formatAuswahl = document.getElementById("format2Beide").value;

  var datumTeile = datumEingabe.split("-");
  var jahr = parseInt(datumTeile[0]);
  var monat = parseInt(datumTeile[1]);
  var tag = parseInt(datumTeile[2]);

  var uhrzeitTeile = uhrzeitEingabe.split(":");
  var stunden = parseInt(uhrzeitTeile[0]);
  var minuten = parseInt(uhrzeitTeile[1]);

  if (formatAuswahl === "Jahre") {
    jahr -= zahlEingabe;
  } else if (formatAuswahl === "Monate") {
    monat -= zahlEingabe;
  } else if (formatAuswahl === "Wochen") {
    tag -= zahlEingabe * 7;
  } else if (formatAuswahl === "Tage") {
    tag -= zahlEingabe;
  } else if (formatAuswahl === "Stunden") {
    stunden -= zahlEingabe;
  } else if (formatAuswahl === "Minuten") {
    minuten -= zahlEingabe;
  }

  var datum = new Date(jahr, monat - 1, tag, stunden, minuten);
  var ergebnisDatum = datum.getDate().toString().padStart(2, "0") + "." +
    (datum.getMonth() + 1).toString().padStart(2, "0") + "." +
    datum.getFullYear();
  var ergebnisUhrzeit = datum.getHours().toString().padStart(2, "0") + ":" +
    datum.getMinutes().toString().padStart(2, "0");

  document.getElementById("ergebnis2").innerHTML = ergebnisDatum + " " + ergebnisUhrzeit;
}