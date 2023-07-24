'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * TRANSLATE A SIMPLE WORD
 * @param {string} word
 * @return word
 * 1. access the first character in the word variable
 *   a. create a variable using bracket notation to access the string's property
 * 2. check to see if the first character is a vowel
 *   a. create a variable to hold and define what 'vowels' are
 * 3. create a variable that uses the method indexOf() to see if vowels are in position 0 of the string
 * 4. If vowels are at the beginning of the string, concatenate 'yay' to the end of the string.
 * If the string starts with a consonant, follow these steps:
 *   1. split the string up to, but not including, the first vowel
 *   2. place the consonant(s) at the end of the string
 *     a.  place the consonants in an empty string
 *     b.  concatenate the two strings together and return the new string resulting in Pig Latin
 *   3. concatenate the two strings together, if a method has not already placed them at the end
 */

const pigLatin = (word) => {
  // Your code here
  // add the toLowerCase() to the word to make all characters lower case
  word = word.toLowerCase();
  // remove unnecessary space from the word inputted
  word = word.trim();

  // an array of vowels defining what vowels are, needed for the for loop below
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter = 0; letter < word.length; letter++) {
    // if the word begins with a vowel, simply add 'yay' to the end of the word
    if (vowels.includes(word[0])) {
      return word + 'yay';
      // else if the word begins with a consonant and includes a vowel,
    } else if (vowels.includes(word[letter])) {
      // remove all consonants before the first vowel, add the removed consonant cluster to the middle
      // and finally add 'ay' to the end of the new word
      return word.slice(letter) + word.slice(0, letter) + 'ay';
    }
    // return word + 'ay';
  }
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
};

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {
  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {
  getPrompt();
}

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
