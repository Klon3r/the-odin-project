//------------------------------------------------
//            FIBONACCI SEQUENCE
//------------------------------------------------

/**
 * Return the amount of fibbonacci numbers
 * @param {int} number - The amount of fibonacci numbers to produce
 * @returns array - fibonacci squence to the number inputted
 */
function fibs(number) {
  let fibArray = [];
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1) {
      fibArray.push(1);
    } else {
      let currentNumber = fibArray[fibArray.length - 1];
      let previousNumber = fibArray[fibArray.length - 2];
      let newNumber = currentNumber + previousNumber;
      fibArray.push(newNumber);
    }
  }
  return fibArray;
}

console.log(fibs(8));
