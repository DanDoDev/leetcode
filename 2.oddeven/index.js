/**
 * @param {number[]} arr
 * @return {number}
 */

let prevJumpsGreater = [];
let prevJumpsLess = [];

const oddEvenJumps = (arr) => {
  prevJumpsGreater = Array(arr.length).fill(-1);
  prevJumpsLess = Array(arr.length).fill(-1);
  let goodJumps = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      goodJumps += 1;
      break;
    }

    if (jumpEvaluator(i, arr, true)) goodJumps += 1;
  }
  return goodJumps;
};

const jumpEvaluator = (startingIndex, array, isGreaterThan) => {
  if (startingIndex >= array.length - 1) return true;
  const currentVal = array[startingIndex];

  let bestMoveIndex = -1;

  if (isGreaterThan) {
    if (prevJumpsGreater[startingIndex] > -1)
      bestMoveIndex = prevJumpsGreater[startingIndex];
  } else {
    if (prevJumpsLess[startingIndex] > -1)
      bestMoveIndex = prevJumpsLess[startingIndex];
  }

  if (bestMoveIndex == -1) {
    for (let i = startingIndex + 1; i < array.length; i++) {
      const val = array[i];
      const legalMove =
        (isGreaterThan && val >= currentVal) ||
        (!isGreaterThan && val <= currentVal);
      const useMove =
        legalMove &&
        (bestMoveIndex == -1 ||
          (isGreaterThan && val < array[bestMoveIndex]) ||
          (!isGreaterThan && val > array[bestMoveIndex]));

      if (legalMove && useMove) {
        bestMoveIndex = i;
      }
    }
  }

  if (bestMoveIndex > -1) {
    if (isGreaterThan) {
      prevJumpsGreater[startingIndex] = bestMoveIndex;
    } else {
      prevJumpsLess[startingIndex] = bestMoveIndex;
    }
    return jumpEvaluator(bestMoveIndex, array, !isGreaterThan);
  }
  return false;
};
