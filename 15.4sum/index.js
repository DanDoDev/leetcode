/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  if (!Array.isArray(nums) || nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  const output = [];
  let set = new Set();

  for (let i = 0; i < nums.length - 3; i++) {
    const firstVal = nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      const secondVal = nums[j];

      let leftOffset = 1;
      let rightOffset = 0;
      while (nums.length - 2 - j - leftOffset - rightOffset >= 0) {
        const sum =
          firstVal +
          secondVal +
          nums[j + leftOffset] +
          nums[nums.length - 1 - rightOffset];

        if (sum === target) {
          const newArray = [
            firstVal,
            secondVal,
            nums[j + leftOffset],
            nums[nums.length - 1 - rightOffset],
          ];
          const setString = newArray.join(",");
          if (!set.has(setString)) {
            set.add(setString);
            output.push(newArray);
          }
          leftOffset++;
          rightOffset++;
        } else if (sum < target) leftOffset++;
        else rightOffset++;
      }
    }
  }
  return output;
};
