'use strict';

const firstWord = prompt('Enter first word:');
const secondWord = prompt('Enter second word:');

if (firstWord.length > secondWord.length) {

    console.log('The shortest word is:', secondWord);
    console.log('The longest word is: ', firstWord);
} else if (firstWord.length < secondWord.length) {
    console.log('The shortest word is:', firstWord);
    console.log('The longest word is: ', secondWord);
} else {
    console.log('The words have the same lenght');
}