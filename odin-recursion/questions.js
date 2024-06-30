//------------------------------------------------
//            FIBONACCI SEQUENCE
//------------------------------------------------
console.log("Fibonacci Sequence:");
/**
 * Return the amount of fibonacci numbers
 * @param {int} number - The amount of fibonacci numbers to produce
 * @returns array - fibonacci squence to the number inputted
 */
function fibs(number) {
  let fibArray = [];
  for (let i = 0; i < number; i++) {
    if (i < 2) fibArray.push(i);
    else {
      let currentNumber = fibArray[fibArray.length - 1];
      let previousNumber = fibArray[fibArray.length - 2];
      let newNumber = currentNumber + previousNumber;
      fibArray.push(newNumber);
    }
  }
  return fibArray;
}

console.log(fibs(8));

/**
 * Return the amount of fibonacci numbers via recursion
 * @param {int} number - The number of fibonacci to produce
 * @returns int
 */
function fibsRec(number) {
  if (number < 2) {
    return number;
  } else {
    return fibsRec(number - 1) + fibsRec(number - 2);
  }
}

/**
 * Print out the fibonacci sequence to array
 * @param {int} number
 */
function fibsRecArray(number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(fibsRec(i));
  }
  console.log(array);
}

fibsRecArray(8);
