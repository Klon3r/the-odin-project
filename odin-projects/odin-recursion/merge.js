//---------------------------
//      MERGE SORT
//---------------------------

array = [3, 2, 1, 13, 8, 5, 0, 1];

/**
 * Function to perform merge sort on an array.
 * @param {number[]} array - The array of numbers to be sorted.
 * @returns {number[]} - Sorted array in ascending order.
 */
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  mid = Math.floor(array.length / 2);
  const l = array.slice(0, mid);
  const r = array.slice(mid, array.length);

  //console.log("Left:", l);
  //console.log("Right:", r);

  return merge(mergeSort(l), mergeSort(r));
}

/**
 * Function to merge two sorted arrays into a single sorted array.
 * @param {number[]} left - The left sorted array.
 * @param {number[]} right - The right sorted array.
 * @returns {number[]} - Merged sorted array.
 */
function merge(left, right) {
  let array = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  while (left.length) array.push(left.shift());
  while (right.length) array.push(right.shift());

  return [...array, ...left, ...right];
}

console.log(mergeSort(array));
