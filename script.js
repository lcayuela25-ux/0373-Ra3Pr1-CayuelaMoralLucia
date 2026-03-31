let alumnes = [];

const formulari = document.getElementById("formulariAlumne");
const inputNom = document.getElementById("nom");
const inputExamen = document.getElementById("examen");
const inputPractiques = document.getElementById("practiques");
const inputActitud = document.getElementById("actitud");
const missatge = document.getElementById("missatge");
const cosTaula = document.getElementById("cosTaula");
const botoAsc = document.getElementById("ordenarAsc");
const botoDesc = document.getElementById("ordenarDesc");

formulari.addEventListener("submit", validarFormulari);
botoAsc.addEventListener("click", ordenarAscendent);
botoDesc.addEventListener("click", ordenarDescendent);

function validarFormulari(event) {
  event.preventDefault();

  let nom = inputNom.value.trim();
  let examen = parseFloat(inputExamen.value);
  let practiques = parseFloat(inputPractiques.value);
  let actitud = parseFloat(inputActitud.value);

  if (nom === "") {
    mostrarMissatge("El nom no pot estar buit", "error");
    return;
  }

  if (isNaN(examen)) {
    mostrarMissatge("La nota de l'examen ha de ser numèrica", "error");
    return;
  }

  if (isNaN(practiques)) {
    mostrarMissatge("La nota de pràctiques ha de ser numèrica", "error");
    return;
  }

  if (isNaN(actitud)) {
    mostrarMissatge("La nota d'actitud ha de ser numèrica", "error");
    return;
  }

  if (examen < 0 || examen > 10) {
    mostrarMissatge("La nota de l'examen ha d'estar entre 0 i 10", "error");
    return;
  }

  if (practiques < 0 || practiques > 10) {
    mostrarMissatge("La nota de pràctiques ha d'estar entre 0 i 10", "error");
    return;
  }

  if (actitud < 0 || actitud > 10) {
    mostrarMissatge("La nota d'actitud ha d'estar entre 0 i 10", "error");
    return;
  }

  let notaFinal = calcularNotaFinal(examen, practiques, actitud);
  afegirAlumne(nom, examen, practiques, actitud, notaFinal);

  mostrarMissatge("Alumne afegit correctament", "correcte");
  formulari.reset();
}

function calcularNotaFinal(examen, practiques, actitud) {
  let resultat = (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1);
  return resultat;
}

function afegirAlumne(nom, examen, practiques, actitud, notaFinal) {
  let alumne = {
    nom: nom,
    examen: examen,
    practiques: practiques,
    actitud: actitud,
    notaFinal: notaFinal
  };

  alumnes.push(alumne);
  mostrarAlumnes();
}

function mostrarAlumnes() {
  cosTaula.innerHTML = "";

  for (let i = 0; i < alumnes.length; i++) {
    let alumne = alumnes[i];
    let estat = "";
    let classeEstat = "";

    if (alumne.notaFinal >= 5) {
      estat = "Aprovat";
      classeEstat = "aprovat";
    } else {
      estat = "Suspès";
      classeEstat = "suspes";
    }

    let fila = `
      <tr>
        <td>${alumne.nom}</td>
        <td>${alumne.examen.toFixed(2)}</td>
        <td>${alumne.practiques.toFixed(2)}</td>
        <td>${alumne.actitud.toFixed(2)}</td>
        <td>${alumne.notaFinal.toFixed(2)}</td>
        <td class="${classeEstat}">${estat}</td>
      </tr>
    `;

    cosTaula.innerHTML += fila;
  }
}

function ordenarAscendent() {
  alumnes.sort(function(a, b) {
    return a.notaFinal - b.notaFinal;
  });

  mostrarAlumnes();
}

function ordenarDescendent() {
  alumnes.sort(function(a, b) {
    return b.notaFinal - a.notaFinal;
  });

  mostrarAlumnes();
}

function mostrarMissatge(text, tipus) {
  missatge.textContent = text;
  missatge.className = tipus;
}
