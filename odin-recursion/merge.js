//---------------------------
//      MERGE SORT
//---------------------------

array = [3, 2, 1, 13, 8, 5, 0, 1];

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
