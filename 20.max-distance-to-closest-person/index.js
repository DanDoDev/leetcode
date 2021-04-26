/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let largestGap = 0;
  let currentStartIndex = null;
  let currentEndIndex = null;
  for (let i = 0; i < seats.length; i++) {
    const taken = seats[i] > 0;
    if (!taken) {
      if (currentStartIndex === null) currentStartIndex = i;
      if (currentEndIndex === null) currentEndIndex = i;
      else currentEndIndex++;
    }
    if (currentStartIndex !== null && currentEndIndex !== null) {
      const gapSize = calculateGapSize(
        currentStartIndex,
        currentEndIndex,
        seats.length - 1
      );
      if (gapSize > largestGap) largestGap = gapSize;
    }
    if (taken) {
      currentStartIndex = null;
      currentEndIndex = null;
    }
  }
  return largestGap;
};

const calculateGapSize = (startIndex, endIndex, lastArrayPos) => {
  if (startIndex === 0 || endIndex === lastArrayPos)
    return endIndex - startIndex + 1;
  return Math.ceil((endIndex - startIndex + 1) / 2);
};
