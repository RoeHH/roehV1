"use strict";

function ja() {
  document.getElementById("zimmer").innerHTML = "<h2>Einzel oder Doppelzimmer</h2><br><input type=\"radio\" id=\"einzel\" name=\"zimmer\" value=\"einzel\"><label for=\"einzel\">Einzelzimmer</label><br><input type=\"radio\" id=\"doppel\" name=\"zimmer\" value=\"doppel\"><label for=\"doppel\">Doppelzimmer</label><br>";
}

function nein() {
  document.getElementById("zimmer").innerHTML = "";
}