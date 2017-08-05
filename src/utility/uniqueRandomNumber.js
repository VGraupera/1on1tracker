import uniqueRandom from 'unique-random';

/**
 * @description Improved version of unique-random. Always shows unique number
 * between two numbers until all numbers have shown then starts new cycle
 * @param {Number} start
 * @param {Number} end
 * @return {Function}
 */
function uniqueRandomNumber(start, end) {
  const rand = uniqueRandom(start, end);
  let showedNumber = [];

  return function random() {
    if ((showedNumber.length - 1) === end) {
      showedNumber = [];
    }

    const nextNumber = rand();

    if (showedNumber.indexOf(nextNumber) === -1) {
      showedNumber.push(nextNumber);
      return nextNumber;
    }

    return random();
  };
}

export default uniqueRandomNumber;
