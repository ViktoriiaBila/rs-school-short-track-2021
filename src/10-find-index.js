/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = 0;
  while (array[middle] !== value) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] > value) {
      right = middle - 1;
    } else if (array[middle] < value) {
      left = middle + 1;
    }
  }
  return middle;
}

module.exports = findIndex;
