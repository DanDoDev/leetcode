/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
const findReplaceString = (S, indexes, sources, targets) => {
  let currentIndexOffset = 0;
  const sortedOperations = sortOperations(indexes, sources, targets);
  for (let i = 0; i < indexes.length; i++) {
    const index = sortedOperations[i].index + currentIndexOffset;
    const source = sortedOperations[i].source;
    const target = sortedOperations[i].target;

    if (S.substring(index, index + source.length) === source) {
      currentIndexOffset += target.length - source.length;
      S =
        S.substring(0, index) +
        target +
        S.substring(index + source.length, S.length);
    }
  }
  return S;
};

const sortOperations = (indexes, sources, targets) => {
  return indexes
    .map((id, index) => ({
      index: id,
      source: sources[index],
      target: targets[index],
    }))
    .sort((a, b) => a.index - b.index);
};
