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
  "w",
  "x",
  "y",
  "z",
];

/**
 * @description Takes a string and a shift factor and returns it with each character “shifted”.
 * @param {string} word The string to be shifted
 * @param {number} shift The amount to shift by
 * @returns Returns the shifted word
 */
export function caesarCipher(word: string, shift: number) {
  let splitArray: string[] = word.split("");
  let capitalCheck: boolean;

  for (let i = 0; i < splitArray.length; i++) {
    capitalCheck = false;

    if (splitArray[i] === splitArray[i].toUpperCase()) {
      capitalCheck = true;
      splitArray[i] = splitArray[i].toLowerCase();
    }
    if (alphabetMap.includes(splitArray[i])) {
      const element = (element) => element === splitArray[i];
      const whatElement = alphabetMap.findIndex(element);

      const shiftIndex = (whatElement + shift) % 26;
      splitArray[i] = alphabetMap[shiftIndex];

      if (capitalCheck === true) {
        splitArray[i] = splitArray[i].toUpperCase();
      }
    }
  }

  word = splitArray.join("");
  return word;
}

/**
 * @description Takes an array of numbers and returns an object with the following properties: average, min, max, and length
 * @param {number[]}array The array to turn into an object
 * @returns {object} Returns a object with average, min, max & length
 */
export function analyzeArray(array: number[]) {
  if (array.length > 0) {
    array = array.sort();
    const length: number = array.length;
    const initalValue: number = 0;
    const average: number =
      array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / length;
    const min: number = array[0];
    const max: number = array[array.length - 1];

    const object = {
      average: average,
      min: min,
      max: max,
      length: length,
    };

    return object;
  }
}
