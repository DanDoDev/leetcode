/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringTwoDistinct = (s) => {
  if (s.length <= 1) return s.length;
  let currentLetters = {};
  let rightPointer = 0;
  let lettersUsed = 0;
  let bestLength = 0;

  for (let leftPointer = 0; leftPointer < s.length; leftPointer++) {
    const leftLetter = s[leftPointer];
    if (leftPointer === 0) {
      const currentVal = currentLetters[leftLetter];
      currentLetters[leftLetter] = currentVal ? currentVal + 1 : 1;
      if (currentLetters[leftLetter] === 1) {
        lettersUsed++;
      }
    } else {
      const prevLetter = s[leftPointer - 1];
      currentLetters[prevLetter]--;
      if (currentLetters[prevLetter] === 0) {
        lettersUsed--;
      }
    }
    let newVal = false;
    while (lettersUsed <= 2 && rightPointer < s.length - 1) {
      rightPointer++;
      const rightLetter = s[rightPointer];
      if (currentLetters[rightLetter] > 0) {
        currentLetters[rightLetter]++;
      } else {
        currentLetters[rightLetter] = 1;
        lettersUsed++;
        newVal = true;
      }
      if (lettersUsed <= 2 && rightPointer - leftPointer + 1 > bestLength) {
        bestLength = rightPointer - leftPointer + 1;
      }
    }
    if (lettersUsed <= 2 && rightPointer - leftPointer + 1 > bestLength) {
      bestLength = rightPointer - leftPointer + 1;
    }
  }
  return bestLength;
};
