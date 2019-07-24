const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
];

/**
 *
 * @param {array} arrayOfArraysOfNumbers (param Num)
 *
 * returns integer, the checksum
 */
function checksum(arrayOfArrays) {
  if (arrayOfArrays.length < 1) {
    throw new Error("Wrong argument passed - did you pass an array?");
  }

  if (arrayOfArrays.__proto__.constructor.name !== "Array") {
    throw new Error("Wrong argument passed - did you pass an array?");
  }

  for (let j = 0; j < arrayOfArrays.length; j++) {
    if (arrayOfArrays[j].__proto__.constructor.name !== "Array") {
      throw new Error("Wrong argument passed - did you pass an array?");
    }
  }

  let sum = 0;

  function getDiffence(array) {
    const sortedArray = [...array].sort((a, b) => {
      return a - b;
    });

    const max = sortedArray[sortedArray.length - 1];
    const min = sortedArray[0];

    return max - min;
  }

  for (let i = 0; i < arrayOfArrays.length; i++) {
    sum += getDiffence(arrayOfArrays[i]);
  }
  return sum;
}

console.log(checksum(data));
