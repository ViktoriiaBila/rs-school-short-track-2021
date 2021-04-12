/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter;
  let i = 0;
  while (i < str.length) {
    counter = 1;
    let j = i + 1;
    if (str[i] === str[j]) {
      while (str[i] === str[j]) {
        j++;
        counter++;
      }
      result += String(counter) + str[i];
      i = j;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}

module.exports = encodeLine;
