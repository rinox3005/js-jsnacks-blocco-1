'use strict';

//inizializzo la variabile somma assegnando valore 0
let sum = 0;
//inizializzo la variabile userInput assegnando il valore 0
let userInput = 0;

//utilizzo un ciclo per chiedere all'utente 10 volte di inserire un numero
for (let i = 0; i < 10; i++) {
    userInput = parseInt(prompt(`Enter number ${i + 1}:`));

    console.log('Number ' + [i + 1] + ': ', userInput);
    //se l'utente inserisce un valore non numerico il counter diminuisce e chiedo di nuovo di inserire lo stesso numero
    if (isNaN(userInput)) {
        i--;
        console.log('The value you entered is not a number, please enter a number!');
        //sommo i valori inseriti dall'utente
    } else {
        sum += userInput;
    }
}
//stampo in console il totale dei numeri
console.log('The total is: ', sum);

