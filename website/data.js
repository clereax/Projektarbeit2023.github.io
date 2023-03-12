document.addEventListener(
    "wheel",
    function touchHandler(e) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    }, { passive: false } );


let round = 4;
let mistakes = 0;

function btn1() {
  if (round == 0 || round == 0) {
    alert("Du hast den ersten Ramriegel richtig verbaut!" + "\n" + "Suche den zweiten Ramriegel.");
    round++;
    ram1 = true;
    ////Hier muss die Markierung noch verschwinden
    document.getElementById("btn1").style.visibility = "hidden";
  }
  else if (round == 0 || round == 1) {
    alert("Du hast den zweiten Ramriegel richtig verbaut!");
    round++;
  }

  else {
    wrong();
  }

  if (round == 2) {
    update1();
  }
}

function btn2() {
  if (round == 0 || round == 0) {
      alert("Du hast den ersten Ramriegel richtig verbaut!" + "\n" + "Suche den zweiten Ramriegel.");
      round++;
      ///Hier muss die Markierung noch verschwinden!
      document.getElementById("btn2").style.visibility = "hidden";
  }

  else if (round == 0 || round == 1) {

    alert("Du hast den zweiten Ramriegel richtig verbaut!");
    round++;
  }
  else {
    wrong();
  }

  if (round == 2) {
    update1();
  }
}

function btn3() {
  if (round == 2) {
    alert("Du hast die Grafikkarte richtig verbaut!");
    round++;
    update2();
  }
  else {
    wrong();
  }
}

function btn4() {
  wrong();
}

function btn5() {
  wrong();
}

function btn6() {
  if (round == 3) {
    alert("Du hast das Interne-Laufwerk richtig verbaut!");
    round++;
    update3();
  }
  else {
    wrong();
  }
}

function btn7() {
  wrong();
}

function btn8() {
  wrong();
}

function btn9() {
  wrong();
}

function btn10() {
  if (round == 4) {
    alert("Du hast das Netzteil richtig verbaut!");
    round++;
    update4();
  }
  else {
    wrong();
  }
}

function btn11() {
  if (round == 5) {
    alert("Du hast die BIOS-Batterie richtig zugeordnet!");
    round++;
    update5();
  }
  else {
    wrong();
  }
}



///// Wenn sich die Runden aktualisieren:
function update1() {
  if (round == 2) {
    document.getElementById("mainboard").src="pictures/real/mb phase 2.png";
    document.getElementById("comp").src="pictures/Grafikkarte edit.png";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";

    document.getElementById("compheader").innerHTML = "Grafikkarte";

    ///Verbuggte Buttons verschieben (Handy):
    document.getElementById("btn8").style.left = "6.8%";
    document.getElementById("btn5").style.left = "12%";
    document.getElementById("btn3").style.top = "49%";
    document.getElementById("btn6").style.top = "84.5%";
    document.getElementById("btn4").style.top = "89%";
    document.getElementById("btn10").style.left = "91%";
  }
}

function update2() {
  if (round == 3) {
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("btn7").style.visibility = "hidden";
    document.getElementById("compheader").innerHTML = "Internes-Laufwerk";
    document.getElementById("comp").src="pictures/Laufwerk edit.png";
    document.getElementById("mainboard").src="pictures/real/mb phase 3.png";


    ////Verbuggte Buttons verschieben:
    document.getElementById("btn8").style.left = "8%";
    document.getElementById("btn8").style.top = "65.6%";
    document.getElementById("btn5").style.left = "12.5%";
    document.getElementById("btn5").style.top = "55%";
    document.getElementById("btn6").style.left = "48%";
    document.getElementById("btn6").style.top = "91.4%";
    document.getElementById("btn4").style.left = "48%";
    document.getElementById("btn4").style.top = "96%"
    document.getElementById("btn4").style.width = "20.5%";

    document.getElementById("btn9").style.left = "35.6%";
    document.getElementById("btn9").style.top = "45%";
    document.getElementById("btn10").style.top = "43.5%";
    document.getElementById("btn10").style.left = "92.1%";
  }
}

function update3() {
  if (round == 4) {
    document.getElementById("btn6").style.visibility = "hidden";
    document.getElementById("btn4").style.visibility = "hidden";
    document.getElementById("compheader").innerHTML = "Netzteil";
    document.getElementById("comp").src="pictures/Netzteil real.png";
    document.getElementById("mainboard").src="pictures/real/mb phase 4.png";

    ////Verbuggte Buttons verschieben:
    document.getElementById("btn5").style.left = "12%";
    document.getElementById("btn5").style.top = "54%";

    document.getElementById("btn9").style.left = "34.5%";
    document.getElementById("btn9").style.top = "45%";

    document.getElementById("btn10").style.top = "40.7%";
    document.getElementById("btn10").style.left = "92.5%";
  }
}

function update4() {
  if (round == 5) {

    ///Andere Button Sichtbar machen
    document.getElementById("mainboard").src = "pictures/real/mb phase 1.png";
    document.getElementById("btn11").style.visibility = "visible";
    document.getElementById("btn12").style.visibility = "visible";
    document.getElementById("btn13").style.visibility = "visible";

    //Button unsichtbar machen, welche nicht benötigt werden
    document.getElementById("btn8").style.visibility = "hidden";
    document.getElementById("btn5").style.visibility = "hidden";
    document.getElementById("btn9").style.visibility = "hidden";
    document.getElementById("btn10").style.visibility = "hidden";

  }
}

function update5() {
  if (round == 5) {
    ////Alles unsichtbar machen
    document.getElementById("auswertungTXT").style.marginTop = "-32%";

    document.getElementById("btn8").style.visibility = "hidden";
    document.getElementById("btn5").style.visibility = "hidden";
    document.getElementById("btn10").style.visibility = "hidden";
    document.getElementById("btn9").style.visibility = "hidden";

    document.getElementById("mainboard").src="pictures/real/mb 5 finished edit.png";
    document.getElementById("mainboard").style.borderRadius = "50px";

    document.getElementById("mainheader").innerHTML = "Mainboard - Fertig";

    document.getElementById("compheader").innerHTML = "Auswertung:";
    document.getElementById("comp").style.visibility = "hidden";
    document.getElementById("auswertungTXT").style.visibility = "visible";

    if (mistakes >= 4) {
      document.getElementById("auswertungTXT").innerHTML = "Du hast " + mistakes + " Fehler beim Zusammenbau gemacht!" + "\n" + '\n' + "🙁Du solltest dir noch einmal das Mainboard und seine Plätze genau anschauen!🙁";
    }
    else if (mistakes == 3 || mistakes == 2) {
      document.getElementById("auswertungTXT").innerHTML = "Du hast " + mistakes + " Fehler beim Zusammenbau gemacht!" + "\n" + '\n' + "😐Du hast schon einiges am Mainboard verstanden. Dennoch solltest du dein Wissen weiter festigen.😐";
    }
    else if (mistakes == 1) {
      document.getElementById("auswertungTXT").innerHTML = "Du hast einen Fehler beim Zusammenbau gemacht!" + "\n" + '\n' + "😃Du kennst dich schon gut mit dem Mainboard aus! Schaue dir jedoch noch einmal deinen Fehler an und lerne aus ihm.😃";
    }
    else if (mistakes == 0) {
      document.getElementById("auswertungTXT").innerHTML = "Du hast keinen Fehler beim Zusammenbau gemacht!" + "\n" + '\n' + "😄Du kennst dich sehr gut mit dem Mainboard und seinem Aufbau aus! Gut gemacht!😄";
    }

    
  }
}




//////Funktionen//////// (Ein Kommentar)

//Falsche Antwort (Ein Kommentar)
function wrong() {
  mistakes++;
  alert("Du hast den falschen Platz gewählt!" + "\n" + "Aktuelle Fehlerzahl: " + mistakes);
}



