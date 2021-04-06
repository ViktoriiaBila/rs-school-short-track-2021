/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    const item = new RegExp(s1[i], 'g');
    if (!s1.slice(0, i).match(item) && s2.match(item)) {
      result += Math.min(s2.match(item).length, s1.match(item).length);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
