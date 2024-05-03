'use strict';

// -- inizializzo una variabile arrayOfNumbers che contiene un array con i primi 10 numeri naturali
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('The numbers are: ', arrayOfNumbers);

// -- inizializzo una variabile sum e le assegno valore 0
let sum = 0;

// -- inizializzo una variabile average e calcolo la media dei valori
let average = sum / arrayOfNumbers.length;

// -- utilizzo un cliclo for per sommare i singoli valori contenuti all'interno dell'array
for (let i = 0; i < arrayOfNumbers.length; i++) {

    sum += arrayOfNumbers[i];
}

// -- stampo il risultato della somma
console.log('The sum of the numbers is: ', sum);

// -- stampo la media dei valori
console.log('The weighted average of the numbers is: ', average);