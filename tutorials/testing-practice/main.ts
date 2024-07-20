/**
 * @description Take in a word and capitalize only the first letter
 * @param {string} word The word to capitalize
 * @returns {string|null} Returns string if there is a word else return null
 */
export function capitalize(word: string) {
  if (word.length <= 0) return null;
  let wordToLower: string = word.toLowerCase();
  let wordRight: string = wordToLower.slice(1, wordToLower.length);
  word = wordToLower[0].toUpperCase() + wordRight;
  return word;
}

/**
 * @description Takes in a string and returns it reversed
 * @param {string} word The word to reverse
 * @returns {string|null} Return the reversed string else if no string is supplied return null
 */
export function reverseString(word: string) {
  if (word.length <= 0) return null;
  const wordArray: string[] = word.split("");
  let reverse: string[] = wordArray.reverse();
  return reverse.join("");
}

/**
 * The calculator class with add(), subtract(), divide(), multiply()
 */
export class Calculator {
  /**
   * @description Add together two numbers
   * @param {number}x First Number
   * @param {number}y Second Number
   * @returns {number} Return x + y
   */
  add(x: number, y: number) {
    return x + y;
  }

  /**
   * @description Subtract together two numbers
   * @param {number}x First Number
   * @param {number}y Second Number
   * @returns {number} Return x - y
   */

  subtract(x: number, y: number) {
    return x - y;
  }

  /**
   * @description Multiply together two numbers
   * @param {number}x First Number
   * @param {number}y Second Number
   * @returns {number} Return x / y
   */
  divide(x: number, y: number) {
    if (x === 0 || y === 0) return "Cannot divide by 0";
    return x / y;
  }

  /**
   * @description Multipy together two numbers
   * @param {number}x First Number
   * @param {number}y Second Number
   * @returns {number} Return x * y
   */
  mulitply(x: number, y: number) {
    return x * y;
  }
}

const alphabetMap = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

export function caesarCipher(word: string, shift: number) {
  // Take string and convert into letters
  // Find letter in array and find index
  // Plus shift number to index ( number % 26? )
  // Rejoin array
}
