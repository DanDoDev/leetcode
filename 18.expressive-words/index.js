/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
const expressiveWords = (S, words) => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (checkWordStretch(S, words[i])) count++;
  }
  return count;
};

const checkWordStretch = (S, word) => {
  let lastPosInWord = 0;
  let lastChar = null;
  let charRepeatCount = 0;
  let didBorrow = false;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === word[lastPosInWord]) {
      if (charRepeatCount < 3 && didBorrow) return false;
      lastPosInWord++;
      if (lastChar !== S[i]) charRepeatCount = 0;
      lastChar = S[i];
      charRepeatCount++;
      didBorrow = false;
    } else if (S[i] === lastChar) {
      charRepeatCount++;
      didBorrow = true;
    } else {
      return false;
    }
  }

  if ((didBorrow && charRepeatCount < 3) || lastPosInWord <= word.length - 1)
    return false;
  return true;
};
