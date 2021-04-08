/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  if (matrix.length === 1) return matrix;

  const gridLength = matrix.length;
  let currentGridLength = gridLength;
  let lastPuzzleIncrement = 0;

  for (let i = 0; i < gridLength - 2; i++) {
    // i acts as increment for inner squares;

    currentGridLength -= i > 0 ? 2 : 0;
    lastPuzzleIncrement = i;

    if (currentGridLength <= 2) break;

    for (let j = 0; j < currentGridLength - 1; j++) {
      // j keeps track of moves necessary to finish a ring
      let positionInMemory = null;
      let secondPositionInMemory = null;
      for (let k = 0; k < 4; k++) {
        // k keeps tracks of moves necessary to finish moving a single piece all around
        switch (k) {
          case 0:
            positionInMemory = matrix[0 + i + j][gridLength - 1 - i];
            matrix[0 + i + j][gridLength - 1 - i] = matrix[0 + i][0 + i + j];
            break;
          case 1:
            secondPositionInMemory =
              matrix[gridLength - 1 - i][gridLength - 1 - i - j];
            matrix[gridLength - 1 - i][
              gridLength - 1 - i - j
            ] = positionInMemory;
            break;
          case 2:
            positionInMemory = matrix[gridLength - 1 - i - j][0 + i];
            matrix[gridLength - 1 - i - j][0 + i] = secondPositionInMemory;
            break;
          case 3:
            matrix[0 + i][0 + i + j] = positionInMemory;
            break;
        }
      }
    }
  }

  if (currentGridLength === 2) {
    let memory = matrix[0 + lastPuzzleIncrement][1 + lastPuzzleIncrement];
    matrix[0 + lastPuzzleIncrement][1 + lastPuzzleIncrement] =
      matrix[0 + lastPuzzleIncrement][0 + lastPuzzleIncrement];
    let memory2 = matrix[1 + lastPuzzleIncrement][1 + lastPuzzleIncrement];
    matrix[1 + lastPuzzleIncrement][1 + lastPuzzleIncrement] = memory;
    memory = matrix[1 + lastPuzzleIncrement][0 + lastPuzzleIncrement];
    matrix[1 + lastPuzzleIncrement][0 + lastPuzzleIncrement] = memory2;
    matrix[0 + lastPuzzleIncrement][0 + lastPuzzleIncrement] = memory;
  }

  return matrix;
};

// [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
