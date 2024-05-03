'use strict';

// -- inizializzo una variabile e chiedo all'utente un numero di 4 cifre 
const userNumber = prompt('Enter a 4-digits number:');

// -- inizializzo una variabile maxLenght e assegno il valore 4
const maxLenght = 4;

// -- inizializzo una variabile sum per calcolare la somma e le assegno valore 0
let sum = 0;

// -- controllo se il numero inserito é di 4 cifre
if (userNumber.length === maxLenght) {
    console.log('The number entered by the user is: ', Number(userNumber));
    // -- controllo con un ciclo for il valore di ogni posizione del numero appena inserito sotto forma di stringa e li converto in valore numerico
    for (let i = 0; i < maxLenght; i++) {
        console.log('Number ' + [i + 1] + ': ' + userNumber[i]);
        // -- calcolo la somma delle cifre che compongono il numero
        sum = sum + Number(userNumber[i]);
    }
    // -- se il numero non é di 4 cifre stampo errore e ricarico la pagina
} else {
    alert('ERROR! Enter a 4 digits number!')
    location.reload();
}

// -- stampo il totale della somma dei numeri in console

console.log('The total of the single numbers addition is: ', sum);