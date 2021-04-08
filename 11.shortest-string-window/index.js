/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const searchingFor = {};

  let rightPointer = 0;

  let bestString = null;

  let uniqueValues = 0;

  for (let i = 0; i < t.length; i++) {
    const valueNew = !searchingFor[t[i]];
    if (valueNew) uniqueValues++;
    searchingFor[t[i]] = valueNew ? 1 : searchingFor[t[i]] + 1;
  }
  for (let leftPointer = 0; leftPointer + t.length <= s.length; leftPointer++) {
    const isSearchedFor = searchingFor[s[leftPointer]] !== undefined;

    if (isSearchedFor && leftPointer === 0) {
      searchingFor[s[leftPointer]]--;
      if (searchingFor[s[leftPointer]] === 0) uniqueValues--;
    }

    if (leftPointer > 0) {
      const prevValueSearchedFor =
        searchingFor[s[leftPointer - 1]] !== undefined;
      if (prevValueSearchedFor) {
        searchingFor[s[leftPointer - 1]]++;
        if (searchingFor[s[leftPointer - 1]] === 1) uniqueValues++;
      }
    }

    while (uniqueValues > 0 && rightPointer < s.length) {
      rightPointer++;
      const rightSearchedFor = searchingFor[s[rightPointer]] !== undefined;
      if (rightSearchedFor) {
        searchingFor[s[rightPointer]]--;

        if (searchingFor[s[rightPointer]] === 0) uniqueValues--;
      }
    }

    if (
      uniqueValues === 0 &&
      (!bestString ||
        bestString[1] - bestString[0] > rightPointer - leftPointer)
    ) {
      bestString = [leftPointer, rightPointer];
    } else {
    }
  }
  return bestString ? s.substring(bestString[0], bestString[1] + 1) : "";
};
