/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = (time) => {
  const timeArray = [
    parseInt(time[0]),
    parseInt(time[1]),
    parseInt(time[3]),
    parseInt(time[4]),
  ];
  const digits = timeArray
    .reduce((arr, item) => (arr.includes(item) ? arr : [...arr, item]), [])
    .sort((a, b) => a - b);

  let bestCase = null;

  for (let i = 3; i >= 0; i--) {
    for (let j = 0; j < digits.length; j++) {
      const newDigit = digits[j];

      if (newDigit <= timeArray[i]) continue;

      const newTime = [...timeArray];
      newTime[i] = newDigit;

      if (checkValidTime(newTime)) {
        bestCase = newTime.slice(0, i + 1);
        break;
      }
    }
    if (bestCase) {
      const answer = [...bestCase];

      while (answer.length < 4) {
        answer.push(digits[0]);
      }

      return arrToString(answer);
    }
  }

  return arrToString(Array(4).fill(timeArray[0]));
};

const checkValidTime = (timeArray) => {
  // sample input: [1,2,2,2];
  return (
    parseInt(timeArray[0] + "" + timeArray[1]) < 24 &&
    parseInt(timeArray[2] + "" + timeArray[3]) < 60
  );
};

const arrToString = (timeArray) => {
  // sample input: [1,2,2,2];
  return `${timeArray[0]}${timeArray[1]}:${timeArray[2]}${timeArray[3]}`;
};
