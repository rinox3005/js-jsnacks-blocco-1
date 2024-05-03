'use strict';


let sum = 0;
const userInput = [];

for (let i = 1; i < 11; i++) {
    userInput[i] = Number(prompt('Enter number ' + [i]));
    console.log('Number ' + [i] + ': ', userInput[i]);
    sum = sum + userInput[i];
}

console.log('The total is: ', sum);

