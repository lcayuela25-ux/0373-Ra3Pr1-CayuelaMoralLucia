# 0373-Ra3Pr1-CayuelaMoralLucia
# JavaScript: formulari de notes

| Format d’entrega: Entregueu la url PÚBLICA del repositori de GITHUB. El repositori ha de anomenar-se: 0373-Ra3Pr1-CognomsNom |
| :---- |

###### 

###### Objectiu:

En aquesta pràctica hauràs de crear una petita aplicació web que permeti introduir les notes d’alumnes, calcular la seva nota final i mostrar una taula amb els resultats.

L’objectiu és practicar conceptes bàsics de JavaScript, especialment:

* Funcions  
* Càlculs numèrics senzills  
* Validació de formularis  
* Manipulació bàsica de strings  
* Arrays  
* Objectes  
* Ordenació de dades

No està permès utilitzar AJAX ni cap llibreria externa. La pràctica es resoldrà únicament amb HTML, CSS (opcional) i JavaScript.

### 

### **Descripció de l’aplicació**

La pàgina web contindrà un **formulari** on es podran introduir les dades d’un alumne:

* Nom de l’alumne  
* Nota de l’examen  
* Nota de les pràctiques  
* Nota d’actitud

Quan l’usuari enviï el formulari:

1. Les dades es validaran.  
   1. Si les dades no són correctes es mostrarà quin camp és incorrecte i que necessita per ser correcte.  
2. Si les dades són correctes es calcularà la **nota final**.  
3. L’alumne s’afegirà a una **llista d’alumnes**.  
4. Es mostrarà la llista amb tots els alumnes introduïts.

### **Càlcul de la nota final**

La nota final es calcularà amb la següent ponderació:

* **Examen:** 60%  
* **Pràctiques:** 30%  
* **Actitud:** 10%

Exemple:

* Examen: 7  
* Pràctiques: 8  
* Actitud: 10

Nota final \= (7 × 0.6) \+ (8 × 0.3) \+ (10 × 0.1)

El resultat s’haurà de mostrar amb **dos decimals**.

També s’haurà d’indicar si l’alumne està:

* **Aprovat** (nota ≥ 5\)  
* **Suspès** (nota \< 5\)

### 

### **Validació del formulari**

Abans de fer qualsevol càlcul, el formulari s’ha de validar.  
Cal comprovar:

* El **nom no pot estar buit**  
* Les notes han d’estar entre **0 i 10**  
* Les notes han de ser **numèriques**

Si alguna dada no és correcta, s’ha de mostrar un **missatge d’error** i **no s’ha de calcular la nota**.

### **Emmagatzematge de les dades**

Cada alumne s’haurà de guardar dins un **array d’alumnes**.  
Per representar cada alumne hauràs d’utilitzar **objectes de JavaScript**.

### **Objectes en JavaScript**

Un **objecte** en JavaScript és una estructura que permet guardar diferents dades relacionades entre si utilitzant **propietats (clau: valor)**.

Exemple d’objecte:

| `let alumne = {`    `nom: "Anna",`    `examen: 7,`    `practiques: 8,`    `actitud: 9,`    `notaFinal: 7.6` `};` |
| :---- |

En aquest exemple:

* `nom`, `examen`, `practiques`, `actitud` i `notaFinal` són **propietats**.  
* Cada propietat té un **valor associat**.

Els objectes permeten **organitzar la informació de manera clara**, especialment quan treballem amb **llistes de dades complexes**.

En aquesta pràctica cada alumne s’haurà de guardar com un **objecte dins d’un array**.

Exemple d’array d’alumnes:

| `let alumnes = [`    `{nom:"Anna", notaFinal:7.6},`    `{nom:"Marc", notaFinal:5.2},`    `{nom:"Laura", notaFinal:8.9}` `];` |
| :---- |

### **Mostrar la taula d’alumnes**

La pàgina haurà de mostrar una **taula amb tots els alumnes introduïts**.

Per cada alumne s’ha de mostrar com a mínim:

* Nom  
* Nota final  
* Estat (Aprovat / Suspès)

Opcionalment podeu mostrar les notes de la pràctica i de l’examen.

Exemple:

| Alumne | Nota Calculada | Aprovat / Suspés |
| :---- | :---- | :---- |
| Anna Cortés | 7.60 | Aprovat |
| Marc Alcina | 4.80 | Suspès |
| Laura Perelló | 8.20 | Aprovat |

### 

### **Ordenació de la llista**

L’aplicació haurà de permetre **ordenar la llista d’alumnes per nota final**.

S’haurà d’implementar una funcionalitat que permeti ordenar:

* **De major a menor nota**  
* **De menor a major nota**

Per fer-ho es pot utilitzar el mètode `sort()` dels arrays. Exemple:

| `alumnes.sort(function(a, b){`    `return b.notaFinal - a.notaFinal;` `});` |
| :---- |

###  **Requisits tècnics**

La pràctica ha de complir els següents requisits:

* Utilitzar **funcions JavaScript**  
* Utilitzar **arrays**  
* Utilitzar **objectes**  
* Fer **validació del formulari**  
* Realitzar **càlculs numèrics**  
* Mostrar resultats a la pàgina

No es permet:

* Utilitzar **AJAX**  
* Utilitzar **frameworks o llibreries**  
* Utilitzar codi generat per IA sense entendre’l

### 

### **Suggeriment d’organització del codi**

Està permés crear les funcions que es creguin necessàries. Tot i això es recomana crear algunes funcions com:

* `validarFormulari():`  
  * `Comprovar si els camps tenen el format esperat.`  
  * `Comprovar si els camps están plens.`  
  * `Mostrar missatge d’error`  
  * `Crida de la funció al fer submit al formulari:`

| `formulari.addEventListener("submit", validarFormulari());` |
| :---- |

* `calcularNotaFinal()`  
* `afegirAlumne()`  
* `mostrarAlumnes():`  
  * `Recomanació buidar la taula. cosTaula.innerHTML = “”;`  
  * `Crear un bucle que afegeix una fila (<td>) amb les dades a cada columna:`

| ``let fila = ` <tr>``         `<td>${alumne.nom}</td>`         `<td>${alumne.examen.toFixed(2)}</td>` `…’` `cosTaula.innerHTML += fila;` |
| :---- |

* `ordenarAlumnes()`

Variables i elements HTML: Realitzar getElement i guardar cadascun dels elements necessàris a l’inici del codi JS.

Per a centrar-se en el codi JS podeu partir del projecte amb una plantilla HTML i CSS ja feta. Es pot ver les variacions que necessiteu:

| [https://github.com/eduard-ruesga-xtec/0373-RA3Pr1-Template](https://github.com/eduard-ruesga-xtec/0373-RA3Pr1-Template) |
| :---- |

### 

### **Objectiu final**

Quan l’usuari introdueixi alumnes, la pàgina haurà de permetre:

1. Introduir dades  
2. Validar el formulari  
3. Calcular la nota final  
4. Guardar els alumnes  
5. Mostrar la llista  
6. Ordenar els resultats
