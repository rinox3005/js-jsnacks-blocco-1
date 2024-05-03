'use strict';

// -- inizializzo una variabile finalArray con un array vuoto

const finalArray = [];

// -- inizializzo una variabile per stabilire la lunghezza dell'eventuale array nel caso in cui l'utente inserisse solo numeri dispari
const arrayLenght = 6;

// -- inizializzo la variabile number

let number = 0;

// -- con un ciclo for chiedo per 6 volte all'utente di inserire un numero

for (let i = 1; i <= arrayLenght; i++) {

    let number = Number(prompt(`Enter number ${i}:`))

    console.log(`Number ${i}: `, number);

    // -- controllo se l'utente ha inserito un valore numerico o se il valore inserito dall'utente non é un numero

    if (isNaN(number)) {
        alert('Enter a valid number!')
        i--;
        // -- se il valore inserito dall'utente é dispari lo pusho all'interno dell'array finalArray

    } else if (number % 2 !== 0) {
        finalArray.push(number);
    }
}

// -- stampo in console l'array contenente solo i numeri dispari inseriti dall'utente

console.log('Resulting array with only odd numbers: ', finalArray);