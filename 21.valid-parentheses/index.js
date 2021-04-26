/**
 * @param {string} s
 * @return {boolean}
 */

const bracketCombos = {
  "{": "}",
  "(": ")",
  "[": "]",
};

const isValid = (s) => {
  if (s.length % 2 > 0) return false;
  if (s.length === 0) return true;
  let leftPointer = 0;
  let rightPointer = 0;
  let pairFound = false;
  const opener = s[0];
  const searchingFor = bracketCombos[opener];
  let openerCount = 1;
  if (!searchingFor) return false;

  while (!pairFound && rightPointer < s.length) {
    rightPointer++;
    if (s[rightPointer] === opener) openerCount++;
    if (s[rightPointer] === searchingFor) {
      if (openerCount === 1) {
        pairFound = true;
        if (rightPointer - 1 > leftPointer) {
          const subIsValid = isValid(
            s.substring(leftPointer + 1, rightPointer)
          );
          if (!subIsValid) return false;
        }
        if (rightPointer < s.length - 1) {
          return isValid(s.substring(rightPointer + 1, s.length));
        }
      } else openerCount--;
    }
  }
  return pairFound;
};
