/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let highestValue = 0;

  let leftOffset = 0;
  let rightOffset = 0;

  while (height.length - leftOffset - rightOffset >= 2) {
    const remainingHeight = height.length - leftOffset - rightOffset;
    const valueA = height[leftOffset];
    const valueB = height[height.length - 1 - rightOffset];
    const area = (remainingHeight - 1) * Math.min(valueA, valueB);
    if (area > highestValue) highestValue = area;
    if (valueA > valueB) rightOffset++;
    else if (valueA < valueB) leftOffset++;
    else {
      leftOffset++;
      rightOffset++;
    }
  }
  return highestValue;
};
