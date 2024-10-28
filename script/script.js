'use strict';

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// dichiarazione variabili
let distance;
let age;
let finalPrice;
const pricePerKm = 0.21;
const discountMinors = .2;
const discountElderly = .4;
// user info
console.log(`
Benvenuto alle ferrovie
Informazioni utili:
    Prezzo al km: ${pricePerKm}€
Scontistica:
    - under18: ${discountMinors*100}%
    - over65: ${discountElderly*100}%
`
)
// prompting and initialization
distance = parseFloat(prompt("Quanti km vuoi percorrere?"));
console.log("Hai scelto di percorrere " + distance + "km");
age = parseInt(prompt("Quanti anni hai?"));
console.log("La tua età è: " + age); 
// conditions for right result
finalPrice = distance * pricePerKm;
console.log("\n\nPrezzo pieno: " + finalPrice + "€");
if (age < 18) {
    finalPrice *= (1 - discountMinors);
} else if (age >= 65) {
    finalPrice *= (1 - discountElderly);
}
// displaying the output
console.log("Prezzo finale ammonta a: " + finalPrice.toFixed(2) + "€");