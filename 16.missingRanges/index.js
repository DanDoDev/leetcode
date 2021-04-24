/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = (nums, lower, upper) => {
  if (nums.length === 0)
    return [lower !== upper ? `${lower}->${upper}` : `${lower}`];
  const missingRanges = [];
  let lastReached = lower;

  if (nums[0] > lower) {
    const diff = nums[0] - lower;
    missingRanges.push(diff > 1 ? `${lower}->${nums[0] - 1}` : `${lower}`);
    lastReached = nums[0];
  }

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];

    const diff = currentNum - lastReached;
    if (diff === 2) {
      missingRanges.push(`${currentNum - 1}`);
    } else if (diff > 2) {
      missingRanges.push(`${lastReached + 1}->${currentNum - 1}`);
    }
    lastReached = currentNum;
  }

  if (upper > lastReached) {
    const diff = upper - lastReached;
    if (diff >= 2) {
      missingRanges.push(`${lastReached + 1}->${upper}`);
    } else if (diff === 1) {
      missingRanges.push(`${upper}`);
    }
  }

  return missingRanges;
};
