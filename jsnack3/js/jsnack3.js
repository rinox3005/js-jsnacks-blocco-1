'use strict';


let sum = 0;
// const userInput = [];

// for (let i = 1; i < 11; i++) {
//     userInput[i] = Number(prompt('Enter number ' + [i]));
//     console.log('Number ' + [i] + ': ', userInput[i]);
//     sum = sum + userInput[i];
// }

for (let i = 0; i < 10; i++) {

    sum += parseInt(prompt(`Enter number ${i + 1}`));
}

console.log('The total is: ', sum);

