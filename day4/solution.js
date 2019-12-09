'use strict';

function solution(input) {
  const part1Answer = part1(input);
  const part2Answer = part2(input);
  console.log(`Answer is ${part1Answer} and ${part2Answer}`);
  return [part1Answer, part2Answer];
}

function part1(input) {
  const [start, stop] = input.split(',');
  let currInt = parseInt(start, 10);
  const stopInt = parseInt(stop, 10);
  let total = 0;
  while (currInt <= stopInt) {
    const digits = currInt.toString('10').split('').map((c) => parseInt(c));
    let repeated = false;
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] < digits[i - 1]) {
        repeated = false;
        break;
      }
      if (digits[i] === digits[i - 1]) repeated = true;
    }
    if (repeated) total++;
    currInt++;
  }
  return total;
}

function part2(input) {
  const [start, stop] = input.split(',');
  let currInt = parseInt(start, 10);
  const stopInt = parseInt(stop, 10);
  let total = 0;
  while (currInt <= stopInt) {
    const digits = currInt.toString('10').split('').map((c) => parseInt(c));
    let repeated = false;
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] < digits[i - 1]) {
        repeated = false;
        break;
      }
      if (digits[i] === digits[i - 1]) {
        if (i === 1 && digits[0] !== digits[2]) {
          repeated = true;
        } else if (i === digits.length - 1 && digits[i - 2] !== digits[i]) {
          repeated = true;
        } else if (digits[i - 2] !== digits[i] && digits[i + 1] !== digits[i]) {
          repeated = true;
        }
      }
    }
    if (repeated) total++;
    currInt++;
  }
  return total;
}

module.exports.solution = solution;
