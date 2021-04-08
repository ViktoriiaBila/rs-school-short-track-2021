/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].slice());
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;
      for (let k = i - 1; k < matrix.length + i - 1; k++) {
        if (matrix[k]) {
          for (let t = j - 1; t < matrix[i].length + j - 1; t++) {
            counter += +Boolean(matrix[k][t]);
          }
        }
      }
      result[i][j] = counter - +Boolean(matrix[i][j]);
    }
  }
  return result;
}

module.exports = minesweeper;
